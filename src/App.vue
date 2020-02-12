<template>
  <v-app>
    <!-- Sizes your content based upon application components -->
    <v-content class="white pa-0">
      <v-snackbar
        :value="errors && errors.length > 0"
        v-if="errors && errors.length > 0"
        top
        :color="errors[0].type"
        >{{ errors[0].message }}
        <v-btn icon @click="$store.commit('SET_ERRORS', [])">
          <v-icon>mdi-close</v-icon>
        </v-btn>
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

      <v-btn @click="menu = true">
        <span>More</span>
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-dialog
      v-model="menu"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card id="menu">
        <v-toolbar color="white" flat>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon @click="menu = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-container>
          <v-row align="start" justify="center" class="mb-6">
            <v-col cols="12" xs="12" class="mt-n12" style="z-index: 9">
              <v-row justify="center">
                <v-img src="./assets/logo.png" max-width="64" />
              </v-row>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row>
            <v-col cols="4">
              <v-card outlined to="/" @click="menu = false">
                <v-card-text class="text-center pa-1">
                  <v-avatar>
                    <v-icon x-large>mdi-home</v-icon>
                  </v-avatar>
                  <br />
                  <div>Home</div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card outlined to="/our-shows" @click="menu = false">
                <v-card-text class="text-center pa-1">
                  <v-avatar>
                    <v-icon x-large>mdi-filmstrip</v-icon>
                  </v-avatar>
                  <br />
                  <div>Our Shows</div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card outlined to="/calendar" @click="menu = false">
                <v-card-text class="text-center pa-1">
                  <v-avatar>
                    <v-icon x-large>mdi-calendar-month-outline</v-icon>
                  </v-avatar>
                  <br />
                  <div>Calendar</div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card outlined to="/pricing" @click="menu = false">
                <v-card-text class="text-center pa-1">
                  <v-avatar>
                    <v-icon x-large>mdi-currency-usd</v-icon>
                  </v-avatar>
                  <br />
                  <div>Pricing</div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card outlined to="/constellations" @click="menu = false">
                <v-card-text class="text-center pa-1">
                  <v-avatar>
                    <v-icon x-large>mdi-weather-night</v-icon>
                  </v-avatar>
                  <br />
                  <div>Constellations</div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-alert
            color="blue darken-4"
            dark
            icon="mdi-newspaper-variant-outline"
          >
            Sign up to <strong><em>receive our newsletter</em></strong> and be
            the first to know about news shows, discounts, special events,
            coupons, membership benefits, field trips and more!
            <v-divider class="my-4 white" style="opacity: 0.22"></v-divider>
            <v-btn
              outlined
              block
              :to="{ name: 'newsletter.index' }"
              @click="menu = false"
              >Sign me up!</v-btn
            >
          </v-alert>
        </v-container>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      menu: false
    }),
    computed: {
      errors: {
        get() {
          return this.$store.getters.errors
        },
        set(value) {
          return this.$store.commit('SET_ERRORS', value)
        }
      }
    }
  }
</script>

<style scoped>
  .v-bottom-navigation--fixed {
    position: fixed !important;
  }
  .v-item-group.v-bottom-navigation .v-btn {
    height: inherit !important;
  }
  #home,
  #pricing,
  #our-shows,
  #calendar,
  #constellations {
    height: 100% !important;
    min-height: 100% !important;
  }
  #menu {
    background: no-repeat
        linear-gradient(
          rgba(255, 255, 255, 1),
          rgba(255, 255, 255, 1),
          rgba(255, 255, 255, 0.5),
          rgba(255, 255, 255, 0)
        ),
      url('./assets/cover.jpg') !important;
    background-size: cover !important;
  }
</style>
