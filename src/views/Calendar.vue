<template>
  <v-row class="fill-height mb-8" v-if="!isLoading">
    <v-app-bar dark color="#003E7E" class="elevation-0" fixed>
      <v-btn fab icon small @click="setToday">
          <v-icon>
            mdi-calendar
          </v-icon>
        </v-btn>
        <v-btn fab icon small @click="prev">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn fab icon small @click="next">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
        <v-spacer />
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn outlined v-on="on" class="text-none">
              {{ type }}
              <v-icon right>mdi-chevron-down</v-icon>  
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="type = 'day'">
              <v-list-item-title>Day</v-list-item-title>
            </v-list-item>
            <v-list-item @click="type = 'week'">
              <v-list-item-title>Week</v-list-item-title>
            </v-list-item>
            <v-list-item @click="type = 'month'">
              <v-list-item-title>Month</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
    </v-app-bar>
    <v-col class="mt-2">
      <v-row>
        <v-col cols="12" xs="12" md="8" offset-md="2">
          <v-sheet height="100%" class="mt-12">
            <v-calendar color="indigo darken-2 white--text"
                        :now="today"
                        :event-margin-bottom="3"
                        v-model="focus"
                        :type="type"
                        ref="calendar"
                        :event-color="getEventColor"
                        :interval-count="17"
                        :first-interval="6"
                        @click:more="viewDay"
                        @click:date="viewDay"
                        @click:event="handleEventClick"
                        :events="events" />
          </v-sheet>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>

  export default {
    data : () => ({
      type        : 'day',
      isLoading   : true,
      today       : new Date().toISOString().substr(0, 10),
      //focus       : new Date().toISOString().substr(0, 10),
    }),
    computed: {
      events() { return this.$store.state.calendar_events },
      focus: {
        set(value) { this.$store.commit('SET_FOCUS', value) },
        get()      { return this.$store.state.focus },
      }
    },
    methods: {
      getEventColor(event) { return event.color       },
      prev()     { this.$refs.calendar.prev() },
      next()     { this.$refs.calendar.next() },
      setToday() { this.focus = this.today    },
      viewDay({ date }) { 
        this.focus = date 
        this.type = 'day'
      },
      handleEventClick(data) {
        this.$router.push({ name: 'events.show', params: { id: data.event.id } })
      },
      
    },
    async created() {
      this.isLoading = true
      await this.$store.dispatch('fetchCalendarEvents')
      this.isLoading = false
    }
  }

</script>

