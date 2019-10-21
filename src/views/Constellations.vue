<template>
  <div id="constellations">
    <v-row class="fill-height" align="center" justify="center" v-if="loading">
      <v-col class="text-center">
        <v-progress-circular indeterminate color="indigo darken-2" />
      </v-col>
    </v-row>
    <v-row align="start" justify="center" class="mb-6" v-else>
      <v-app-bar color="white" app class="elevation-0" hide-on-scroll>
        <v-text-field solo-inverted flat hide-details label="Search" v-model="name" />
      </v-app-bar>
      <v-col class="px-0 mt-12" cols="12">
        <v-subheader>
          {{ filteredConstellations.length }} {{ filteredConstellations.length == 1 ? 'constellation' : 'constellations' }}
          <v-chip class="ml-2" small outlined v-if="season != ''">{{ season}}</v-chip>
          <v-chip class="ml-2" small outlined v-if="month != ''">{{ month }}</v-chip>
        </v-subheader>
        <v-list two-line>
          <v-list-item-group>
            <template v-for="(constellation, i) in filteredConstellations">
              <v-divider v-if="i === 0" :key="i" />
              <v-list-item  :to="{ name: 'constellations.show', params: { id: constellation.id } }" :key="constellation.id">
                <v-list-item-avatar>
                  <v-icon color="indigo darken-4">mdi-star</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-text="constellation.title" />
                  <v-list-item-subtitle>
                    <v-chip small label outlined class="indigo darken-4 indigo--text text--darken-4 ma-2 ml-0">
                      {{ constellation.month }}
                    </v-chip>
                    <v-chip small label dark class="indigo darken-4">
                      {{ constellation.season }}
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon>
                    mdi-information-outline
                  </v-icon>
                </v-list-item-action>
              </v-list-item>
              <v-divider v-if="i + 1 < constellations.length" :key="i + 1" />
            </template>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="indigo darken-4" v-on="on" fixed fab dark bottom right class="mb-12">
              <v-icon>mdi-filter</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline indigo--text text--darken-4">Filter Constellations</span>
            </v-card-title>
            <v-card-text>
              <v-container class="pa-0">
                <v-row>
                  <v-col cols="12">
                    <span class="subheading">Season</span>
                    <v-chip-group mandatory column active-class="indigo--text text--darken-4" v-model="season">
                      <v-chip filter outlined v-for="season in seasons" :key="season.value" :value="season.value">
                        {{ season.text }}
                      </v-chip>
                    </v-chip-group>
                  </v-col>
                  <v-col cols="12">
                    <span class="subheading">Month</span>
                    <v-chip-group mandatory column active-class="indigo--text text--darken-4" v-model="month">
                      <v-chip filter outlined v-for="month in months" :key="month.value" :value="month.value">
                        {{ month.text }}
                      </v-chip>
                    </v-chip-group>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="indigo darken-4" text @click="dialog = false">
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  data: () => ({
      dialog: false,
      name: '',
      season: '',
      month: '',
      seasons: [
        { text: 'All Seasons', value: '',       key: 'All'   },
        { text: 'Spring',      value: 'Spring', key: 'Spring'},
        { text: 'Summer',      value: 'Summer', key: 'Summer'},
        { text: 'Fall',        value: 'Fall',   key: 'Fall'  },
        { text: 'Winter',      value: 'Winter', key: 'Winter'},
      ],
      months: [
        { text: 'All Months', value: '',          key: 'All'        },
        { text: 'January',    value: 'January',   key: 'January'    },
        { text: 'February',   value: 'February',  key: 'February'   },
        { text: 'March',      value: 'March',     key: 'March'      },
        { text: 'April',      value: 'April',     key: 'April'      },
        { text: 'May',        value: 'May',       key: 'May'        },
        { text: 'June',       value: 'June',      key: 'June'       },
        { text: 'July',       value: 'July',      key: 'July'       },
        { text: 'August',     value: 'August',    key: 'August'     },
        { text: 'September',  value: 'September', key: 'Semptember' },
        { text: 'October',    value: 'October',   key: 'October'    },
        { text: 'November',   value: 'November',  key: 'November'   },
        { text: 'December',   value: 'December',  key: 'December'   },
      ],
    }),
    async mounted() {
      this.loading = true
      await this.$store.dispatch('fetchConstellations')
      this.loading = false
    },
    computed: {
      filteredConstellations() {
        let filteredConstellations = this.constellations
          if (this.month != "")
            filteredConstellations = filteredConstellations.filter(c => c.month == this.month)
          if (this.season != "")
            filteredConstellations = filteredConstellations.filter(c => c.season == this.season)
          if (this.name != "")
            filteredConstellations = filteredConstellations.filter(c => c.title.toLowerCase().includes(this.name.toLowerCase()))
          return filteredConstellations
      },
      constellations() { return this.$store.state.constellations },
      
      loading: {
        get() { return this.$store.state.loading },
        set(value) { this.$store.commit('SET_LOADING', value) }
      },
    }
}
</script>