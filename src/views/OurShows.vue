<template>
  <div id="our-shows">
    <v-row class="fill-height" align="center" justify="center" v-if="loading">
      <v-col class="text-center">
        <v-progress-circular indeterminate color="indigo darken-2" />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" xs="12" md="8" offset-md="2">
        <v-row class="pa-0">
          <v-col cols="12" class="pa-1">
            <v-chip-group column active-class="indigo--text text--darken-4">
              <v-chip outlined v-for="option in options" :key="option.value" @click.prevent="filter = option.value">
                {{ option.text }}
              </v-chip>
            </v-chip-group>
          </v-col>
          <v-col cols="12" class="pa-1">
            <v-subheader>{{ shows.length }} {{ shows.length == 1 ? 'show' : 'shows' }}</v-subheader>
          </v-col>
          <v-col cols="4" xs="4" md="3" v-for="show in shows" :key="show.id" class="pa-1">
            <v-card class="mx-auto">
              <v-img :src="show.cover" :aspect-ratio="9/16" class="grey lighten-2" 
                    @click="$router.push({ name : 'our-shows.show', params : { id: show.id } })">
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    
    data: () => ({
      filter: null,
      options: [
        { 
          text: 'All', 
          value: null 
        },
        { 
          text: 'Planetarium', 
          value: 'Planetarium'
        },
        { 
          text: 'Laser Light', 
          value: 'Laser Light',
        },
      ],
    }),

    computed : {

      shows() {
        if (this.filter)
          return this.$store.getters.shows.filter(show => show.type == this.filter)
        else
          return this.$store.getters.shows
      },

      loading: {
        get() { return this.$store.state.loading },
        set(value) { this.$store.commit('SET_LOADING', value) }
      },

    },

    async created() {

      this.loading = true
      await this.$store.dispatch('fetchShows')
      this.loading = false

    }

  }
</script>
