<template>
  <div id="pricing">
    <v-row class="fill-height" align="center" justify="center" v-if="loading">
      <v-col class="text-center">
        <v-progress-circular indeterminate color="indigo darken-2" />
      </v-col>
    </v-row>
    <v-row align="start" justify="center" v-else>
      <v-col cols="12" xs="12" class="pb-8">
        <v-row>
          <v-col cols="12" xs="12" md="8" offset-md="2">
            <v-card v-for="event_type in event_types" 
                :key="event_type.id" 
                class="mx-auto mb-2" 
                :color="event_type.color"
                dark>
              <v-card-title>
                <v-icon color="white" left>mdi-bookmark</v-icon> {{ event_type.name }}
              </v-card-title>
              <v-card-text>
                {{ event_type.description }}
                <br><br>
                <v-chip small outlined color="white" class="mr-1"
                    v-for="ticket in event_type.allowed_tickets" 
                    :key="ticket.id" 
                    v-show="ticket.public == '1'">
                  <v-icon small left>mdi-ticket</v-icon>
                  $ {{ parseFloat(ticket.price).toFixed(2) }} / {{ ticket.name }} 
                </v-chip>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>

  export default {
    
    computed : {

      event_types() { return this.$store.getters.event_types },

      loading: {
        get() { return this.$store.state.loading },
        set(value) { this.$store.commit('SET_LOADING', value) }
      },

    },

    async created() {
      this.loading = true
      await this.$store.dispatch('fetchEventTypes')
      this.loading = false
    }

  }
</script>
