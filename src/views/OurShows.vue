<template>
  <v-row v-if="!isLoading">
    <v-col cols="12" xs="12" md="8" offset-md="2">
      <v-row>
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
</template>

<script>
  export default {

    data : () => ({

      isLoading : true,

    }),
    
    computed : {

      shows() {
        return this.$store.getters.shows
      },

    },

    async created() {

      this.isLoading = true
      await this.$store.dispatch('fetchShows')
      this.isLoading = false

    }

  }
</script>
