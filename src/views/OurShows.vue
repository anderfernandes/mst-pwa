<template>
  <div id="our-shows">
    <v-row class="fill-height" align="center" justify="center" v-if="loading">
      <v-col class="text-center">
        <v-progress-circular indeterminate color="indigo darken-2" />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" xs="12" md="8" offset-md="2">
        <v-app-bar color="white" app class="elevation-0" hide-on-scroll>
          <v-text-field solo-inverted flat hide-details label="Search" />
        </v-app-bar>
        <v-row class="px-1 my-12">
          <v-col cols="12" class="pa-1">
            <v-chip-group
              column
              active-class="indigo--text text--darken-4"
              mandatory
            >
              <v-chip
                outlined
                v-for="option in options"
                :key="option.value"
                @click.prevent="filter = option.value"
                >{{ option.text }}</v-chip
              >
            </v-chip-group>
            <v-subheader class="float-right">
              Showing {{ shows.length }} of {{ total }}
              {{ shows.length == 1 ? 'show' : 'shows' }}
            </v-subheader>
          </v-col>
          <v-col
            cols="4"
            xs="4"
            md="4"
            v-for="show in shows"
            :key="show.id"
            class="pa-1"
          >
            <v-card class="mx-auto">
              <v-img
                :src="show.cover"
                :aspect-ratio="10 / 14"
                class="grey lighten-2"
                @click="
                  $router.push({
                    name: 'our-shows.show',
                    params: { id: show.id }
                  })
                "
              ></v-img>
            </v-card>
          </v-col>
          <observer @intersect="handleIntersect" />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import Observer from '../components/Observer.vue'

  export default {
    components: { Observer },
    data: () => ({
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
          value: 'Laser Light'
        }
      ]
    }),

    computed: {
      filter: {
        get() {
          return this.$store.state.shows.filter
        },
        set(value) {
          return this.$store.commit('shows/SET_FILTER', value)
        }
      },
      shows() {
        if (this.filter)
          return this.$store.state.shows.shows.filter(
            show => show.type == this.filter
          )
        else return this.$store.state.shows.shows
      },
      total() {
        return this.$store.state.shows.total
      },
      current_page() {
        return this.$store.state.shows.current_page
      },
      loading: {
        get() {
          return this.$store.state.loading
        },
        set(value) {
          this.$store.commit('SET_LOADING', value)
        }
      }
    },

    methods: {
      async handleIntersect() {
        await this.$store.dispatch('shows/fetchShows')
      }
    },

    async created() {
      this.loading = true
      await this.$store.dispatch('shows/fetchShows')
      this.loading = false
    }
  }
</script>
