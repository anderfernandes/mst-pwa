<template>
  <v-row align="start" justify="center" class="mb-6">
    <v-col cols="12" xs="12" class="pa-0">
      <v-img :src="settings.cover" max-height="150"
            gradient="to bottom, rgba(0, 0, 0, .33), rgba(255, 255, 255, 1)" />
    </v-col>
    <v-col cols="12" xs="12" class="mt-n12" style="z-index: 9">
      <v-row justify="center">
        <v-img :src="settings.logo" max-width="32" />
      </v-row>
      <div class="text-center">
        <h2 class="title">Upcoming Shows</h2>
        <h3 class="body-2">
          {{ format(new Date(start), 'EEEE, MMMM d') }} - {{ format(new Date(end), 'EEEE, MMMM d') }}
        </h3>
      </div>
    </v-col>
    <v-col xs="12">
      <v-row>
        <v-col xs="12" md="8" offset-md="2">
          <div v-for="item in schedule" :key="item.date" v-show="item.events.length > 0">
            <v-list subheader>
              <v-subheader class="pl-2 pr-2 body-2 black--text">
                {{ format(new Date(item.date), 'EEEE, MMMM d') }}
              </v-subheader>
              <v-list-item v-for="event in item.events" 
                            :key="event.id" 
                            :to="{ name : 'events.show', params : { id : event.id } }"
                            class="pl-2 pr-2">
                <v-list-item-avatar tile size="64">
                  <v-img :aspect-ratio="9/16" :src="event.show.cover"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ event.show.name }}</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ format(new Date(event.start), 'h:mm a') }} 
                    ({{ formatDistanceToNow(new Date(event.start), {addSuffix: true}) }})
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <v-chip label small :color="event.type.color" class="mr-1" dark>
                      <v-icon small left>mdi-bookmark</v-icon>
                      {{ event.type.name }}
                    </v-chip>
                    <v-chip label small color="indigo darken-2" class="mr-1" dark>
                      <v-icon small left>mdi-filmstrip</v-icon>
                      {{ event.show.type }}
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>  
            </v-list>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>

  import { mapGetters, mapActions }      from 'vuex'
  import { format, formatDistanceToNow } from 'date-fns'

  export default {
    
    data: () => ({
      
      startDatePicker   : false,
      endDatePicker     : false,
      dialog            : false,
      isLoading         : false,
      show_type_filter  : "All",
      event_type_filter : "All",

    }),

    computed: {

      ...mapGetters([ 'schedule', 'event_types', 'settings']),

      start : {
        get()      { return this.$store.state.start },
        set(value) { this.$store.commit('SET_START', value) }
      },

      end : {
        get()      { return this.$store.state.end },
        set(value) { this.$store.commit('SET_END', value) }
      },

      formattedStart() { return this.start ? format(new Date(this.start), 'EEEE, MMMM d, YYYY') : '' },

      formattedEnd() { return this.end ? format(new Date(this.end), 'EEEE, MMMM d, YYYY') : '' },

    },

    methods: {
      
      ...mapActions([ 'fetchSettings', 'fetchSchedule', 'fetchEventTypes' ]),

      // allowedStartDates: between today and end
      allowedStartDates(date) {
        return (
          (date == new Date().toJSON().substr(0, 10)) || (new Date(date) >= new Date()) && (new Date(date) < new Date(this.end))
        )
      },

      // allowedEndDates: between start + 1 and infinity
      allowedEndDates(date) {
        return (new Date(date) > new Date(this.start))
      },
      
      format,
      
      formatDistanceToNow,

    },

    watch : {
      async start() { await this.fetchSchedule() },
      async end()   { await this.fetchSchedule() },
    },
    
    async created() {
      this.isLoading = true
      await this.fetchSettings()
      await this.fetchSchedule()
      await this.fetchEventTypes()
      this.isLoading = false
    },

  }
</script>