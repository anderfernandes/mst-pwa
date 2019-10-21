<template>
  <v-app>

    <!-- Sizes your content based upon application components -->
    <v-content class="white pa-0">

      <v-snackbar :value="errors && errors.length > 0" v-if="errors && errors.length > 0" top :color="errors[0].type">
        {{ errors[0].title }}: {{ errors[0].message }}
      </v-snackbar>

      <v-container fluid class="pt-0" style="height:100%; min-height:100%">
        
        <!-- If using vue-router -->
        <transition mode="out-in" name="fade-transition">
          <router-view />
        </transition>
        
      </v-container>

    </v-content>

    <v-bottom-navigation color="indigo darken-2" fixed>
      <v-btn exact to="/">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn exact to="/pricing">
        <span>Pricing</span>
        <v-icon>mdi-currency-usd</v-icon>
      </v-btn>

      <v-btn exact to="/our-shows">
        <span>Our Shows</span>
        <v-icon>mdi-filmstrip</v-icon>
      </v-btn>

      <v-btn exact to="/calendar">
        <span>Calendar</span>
        <v-icon>mdi-calendar-month-outline</v-icon>
      </v-btn>

      <v-btn exact to="/constellations">
        <span>Constellations</span>
        <v-icon>mdi-weather-night</v-icon>
      </v-btn>

    </v-bottom-navigation>
    
  </v-app>
</template>

<script>

  export default {
  
    computed : {

      errors : {
        get()      { return this.$store.getters.errors },
        set(value) { return this.$store.commit('SET_ERRORS', value )}
      },

    }
  }

</script>

<style scoped>
  .v-bottom-navigation--fixed {position: fixed !important;}
  .v-item-group.v-bottom-navigation .v-btn {height: inherit !important;}
  #home, #pricing, #our-shows, #calendar, #constellations { height:100% !important; min-height:100% !important; }
</style>