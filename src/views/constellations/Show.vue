<template>
  <v-row align="start" justify="center" class="full-height" v-if="constellation">
    <v-app-bar app color="transparent" class="elevation-0">
      <v-btn icon @click.prevent="$router.back()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-app-bar>
     <v-col cols="12" xs="12" class="pa-0">
      <v-card>
        <v-img contain :aspect-ratio="9/16" :src="constellation.image" dark />
      </v-card>
     </v-col>
  </v-row>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      constellation: null,
    }),
    async mounted() {
      try {
        const response = await axios.get("/constellations.json")
        const constellation = response.data.data.items.find(constellation => constellation.id == this.$route.params.id)
        Object.assign(this, { constellation })
      } catch(error) {
        alert(`Error in fetchConstellation: ${ error.message }`)
      }
    }
  }
</script>