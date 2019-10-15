<template>
   <v-row align="start" justify="center" v-if="event">
     <v-col cols="12" xs="12" class="pa-0">
      <v-card flat tile width="100%" height="100%">
        <v-img :aspect-ratio="9/16" :src="event.show.cover" height="300px" dark gradient="to top right, rgba(0,0,0,.75), rgba(0,0,0,.25)">
          
          <v-row class="fill-height">

            <v-col cols="12">
              <v-card-title>
                <v-btn dark icon @click="$router.go(-1)">
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
              </v-card-title>
            </v-col>
            
            <v-col cols="12">
              <v-card-title class="white--text pb-0">
                <v-chip small label color="white" outlined>
                  <v-icon small left>mdi-calendar-month-outline</v-icon>
                  {{ format(new Date(event.start), "EEEE, MMMM d '@' h:mm a ") }}
                </v-chip>
              </v-card-title>
            </v-col>

            <v-col cols="12">
              <v-card-title class="white--text pt-0 pb-0 align-end">
                <div class="headline">{{ event.show.name }}</div>
              </v-card-title>
            </v-col>

            <v-col cols="12">
              <v-card-title class="pt-1 align-end">
                <v-chip label small dark :color="event.color">
                  <v-icon small left>mdi-bookmark</v-icon>
                  {{ event.type }}
                </v-chip>
                <v-chip label small dark color="indigo darken-2" class="ml-2">
                  <v-icon small left>mdi-filmstrip</v-icon>
                  {{ event.show.type }}
                </v-chip>
                <v-chip label small dark color="indigo darken-2" class="ml-2">
                  <v-icon small left>mdi-clock-outline</v-icon>
                  {{ event.show.duration }} minutes
                </v-chip>
              </v-card-title>
            </v-col>            
          </v-row>
        </v-img>
      </v-card>
    </v-col>
    <v-col cols="12" xs="12" class="mb-12">
      <v-row>
        <v-col cols="12" md="8" offset-md="2">
          <h1 class="title">Pricing</h1>
          <br>
          <v-chip small outlined color="indigo darken-2" class="mr-1"
                  v-for="ticket in event.allowedTickets" 
                  :key="ticket.id" 
                  v-show="ticket.public == '1'">
              <v-icon small left>mdi-ticket</v-icon>
              {{ ticket.name }} $ {{ parseFloat(ticket.price).toFixed(2) }}
          </v-chip>
          <br><br>
          <h1 class="title">Description</h1> 
          <br>
          <span class="text--primary" v-html="marked(event.show.description)"></span>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>

  import axios  from 'axios'
  import format from 'date-fns/format'
  import marked from 'marked'
  
  export default {
    data: () => ({
      event         : null,
      dialog        : false,
      notifications : false,
      sound         : true,
      widgets       : false,
      isLoading     : true,
    }),
    methods: {
      
      async fetchEvent() {
        try {
          let response = await axios.get(`${this.$API_URL}/api/event/${this.$route.params.id}`)
          Object.assign(this, { event : response.data })
        } catch (error) {
          alert(`Error on fetchEvent: ${error.message}`)
        }
      },

      format,

      marked,

    },
    async created() {
      this.isLoading = await true
      await this.fetchEvent()
      this.isLoading = await false
    }
  }
</script>

<style>
  iframe { width:100% !important }
</style>