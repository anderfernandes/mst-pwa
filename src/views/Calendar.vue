<template>
  <div id="calendar">
    <v-row class="fill-height" align="center" justify="center" v-if="loading">
      <v-col class="text-center">
        <v-progress-circular indeterminate color="indigo darken-2" />
      </v-col>
    </v-row>
    <v-row class="fill-height mb-8" v-else>
      <v-app-bar dark color="#003E7E" class="elevation-0" fixed>
        <v-btn fab icon small @click="setToday">
          <v-icon>mdi-calendar</v-icon>
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
              {{ calendar_type }}
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="toggleViewType('day')">
              <v-list-item-title>Day</v-list-item-title>
            </v-list-item>
            <v-list-item @click="toggleViewType('week')">
              <v-list-item-title>Week</v-list-item-title>
            </v-list-item>
            <!--<v-list-item @click="toggleViewType('month')">
              <v-list-item-title>Month</v-list-item-title>
            </v-list-item>-->
          </v-list>
        </v-menu>
      </v-app-bar>
      <v-col class="mt-12">
        <v-row>
          <v-col
            cols="12"
            xs="12"
            md="8"
            offset-md="2"
            v-for="(calendar_event, i) in calendar_events"
            :key="calendar_event.id"
          >
            <p
              v-show="
                i == 0 ||
                  (calendar_events.length > 0 &&
                    calendar_events[i - 1] != undefined &&
                    calendar_event.start.split(' ')[0] !=
                      calendar_events[i - 1].start.split(' ')[0])
              "
            >
              {{
                format(
                  new Date(calendar_event.start.replace(' ', 'T')),
                  'EEEE, MMMM d, yyyy'
                )
              }}
            </p>
            <v-card
              :color="calendar_event.color"
              dark
              :to="{ name: 'events.show', params: { id: calendar_event.id } }"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="subtitle-2">{{
                    calendar_event.show.name
                  }}</v-card-title>
                  <v-card-subtitle
                    >{{
                      format(
                        new Date(calendar_event.start.replace(' ', 'T')),
                        'h:mm a'
                      )
                    }}
                    ({{
                      formatDistanceToNow(
                        new Date(calendar_event.start.replace(' ', 'T')),
                        {
                          addSuffix: true
                        }
                      )
                    }})
                  </v-card-subtitle>
                </div>

                <v-avatar class="ma-3" size="128" tile>
                  <v-img :src="calendar_event.show.cover" />
                </v-avatar>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" xs="12" md="8" offset-md="2">
            <p v-show="calendar_events.length == 0">
              {{ format(new Date(calendar_start), 'EEEE, MMMM d, yyyy') }}
            </p>
            <v-alert v-show="calendar_events.length == 0" type="error">
              There are no public events going on this {{ calendar_type }}.
            </v-alert>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import {
    addDays,
    subDays,
    addWeeks,
    subWeeks,
    format,
    formatDistanceToNow,
    setDay
  } from 'date-fns'

  export default {
    data: () => ({
      day: null
    }),
    computed: {
      events() {
        return this.$store.state.calendar_events
      },
      loading: {
        get() {
          return this.$store.state.loading
        },
        set(value) {
          this.$store.commit('SET_LOADING', value)
        }
      },
      calendar_start: {
        set(value) {
          this.$store.commit('SET_CALENDAR_START', value)
        },
        get() {
          return this.$store.state.calendar_start
        }
      },
      calendar_end: {
        set(value) {
          this.$store.commit('SET_CALENDAR_END', value)
        },
        get() {
          return this.$store.state.calendar_end
        }
      },
      calendar_type: {
        set(value) {
          this.$store.commit('SET_CALENDAR_TYPE', value)
        },
        get() {
          return this.$store.state.calendar_type
        }
      },
      calendar_events() {
        return this.$store.state.calendar_events
      },
      settings() {
        return this.$store.state.settings
      }
    },
    methods: {
      getEventColor(calendar_event) {
        return calendar_event.color
      },
      async prev() {
        this.calendar_start = subDays(this.calendar_start, 1)
        this.calendar_end = new Date(this.calendar_start)
        await this.$store.dispatch('fetchCalendarEvents')
      },
      async next() {
        if (this.calendar_type == 'day') {
          this.calendar_start = addDays(this.calendar_start, 1)
          this.calendar_end = new Date(this.calendar_start)
        } else if (this.calendar_type == 'week') {
          this.calendar_start = addWeeks(this.calendar_start, 1)
          this.calendar_start = setDay(this.calendar_start, 0)
          this.calendar_end = setDay(this.calendar_start, 6)
        }

        await this.$store.dispatch('fetchCalendarEvents')
      },
      async setToday() {
        this.calendar_type = 'day'
        this.calendar_start = new Date()
        this.calendar_end = new Date()
        await this.$store.dispatch('fetchCalendarEvents')
      },
      viewDay({ date }) {
        this.calendar_start = date
        this.calendar_type = 'day'
      },
      toggleViewType(type) {
        this.calendar_type = type
        if (type == 'day') {
          this.calendar_end = this.calendar_start
        } else if (type == 'week') {
          this.calendar_start = setDay(this.calendar_start, 0)
          this.calendar_end = setDay(this.calendar_start, 6)
        }
        this.$store.dispatch('fetchCalendarEvents')
      },
      format,
      formatDistanceToNow,
      addWeeks,
      subWeeks
    },
    async created() {
      this.loading = true
      await this.$store.dispatch('fetchSettings')
      await this.$store.dispatch('fetchCalendarEvents')
      this.loading = false
    },
    async updated() {
      //await this.$store.dispatch('fetchCalendarEvents')
    }
  }
</script>
