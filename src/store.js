import Vue     from 'vue'
import Vuex    from 'vuex'
import axios   from 'axios'
import addDays from 'date-fns/addDays'

Vue.use(Vuex)

const API_URL = 'https://astral.ctcd.org'

export default new Vuex.Store({

  state: {

    loading         : true,
    start           : new Date().toJSON().substr(0, 10),
    end             : new Date(addDays(new Date(), 7)).toJSON().substr(0, 10),
    
    calendar_events : [],
    calendar_start  : new Date().toJSON().substr(0, 10),
    calendar_end    : new Date(addDays(new Date(), 7)).toJSON().substr(0, 10),
    
    settings        : [],
    schedule        : [],
    event_types     : [],
    shows           : [],
    errors          : [], // { title, message }
    focus           : new Date().toISOString().substr(0, 10),

  },

  mutations: {

    SET_LOADING(state, payload) {
      Object.assign(state, { loading: payload })
    },

    SET_START(state, payload) {
      Object.assign(state, { start : payload })
    },

    SET_END(state, payload) {
      Object.assign(state, { end : payload })
    },

    SET_SETTINGS(state, payload) { 
      Object.assign(state, { settings : payload }) 
    },
    
    SET_SCHEDULE(state, payload) { 
      Object.assign(state, { schedule : payload }) 
    },

    SET_EVENT_TYPES(state, payload) { 
      Object.assign(state, { event_types : payload }) 
    },

    SET_SHOWS(state, payload) {
      Object.assign(state, { shows : payload })
    },

    SET_CALENDAR_EVENTS(state, payload) {
      Object.assign(state, { calendar_events : payload })
    },

    SET_ERRORS(state, payload) { 
      state.errors.push(payload) 
    },

    SET_FOCUS(state, payload) {
      Object.assign(state, { focus : payload })
    },

  },

  actions: {

    async fetchSettings({ commit }) {
      try {
        let response = await axios.get(`${API_URL}/api/settings`)

        // Checking the URLs of cover and logo
        response.data.logo[0] == '/' 
          ? Object.assign(response.data, { logo : `${API_URL}${response.data.logo}` })
          : Object.assign(response.data, { logo : `${API_URL}/storage/${response.data.logo}` })
        
        response.data.cover[0] == '/'
          ? Object.assign(response.data, { cover : `${API_URL}${response.data.cover}` })
          : Object.assign(response.data, { cover : `${API_URL}/storage/${response.data.cover}` })

        commit('SET_SETTINGS', response.data)

      } catch (error) {
        commit('SET_ERRORS', { title : 'Error on fetchSettings', message : error.message, type : 'error' })
      }
    },

    async fetchSchedule({ commit, state }) {
        
      let start = new Date(state.start)
      let end   = new Date(state.end)
      start = start.toJSON().substr(0, 10)
      end   = end.toJSON().substr(0, 10)
      
      try {
        const response = await axios.get(`${API_URL}/api/events/by-date?start=${start}&end=${end}`)

        commit('SET_SCHEDULE', response.data.data)
        
      } catch (error) {
        commit('SET_ERRORS', { title : 'Error on fetchEvents', message : error.message , type : 'error' })
      }
    },

    async fetchEventTypes({ commit }) {
      try {
        const response = await axios.get(`${API_URL}/api/event-types?public`)
        commit('SET_EVENT_TYPES', response.data)
      } catch (error) {
        commit('SET_ERRORS', { title : 'Error on fetchEventTypes', message : error.message , type : 'error' })
      }
    },

    async fetchShows({ commit }) {
      try {
        const response = await axios.get(`${API_URL}/api/public/shows`)
        commit('SET_SHOWS', response.data.data)
      } catch (error) {
        commit('SET_ERRORS', { title : 'Error on fetchShows', message : error.message, type : 'error' })
      }
    },

    async fetchCalendarEvents({ commit, state }) {
      try {
        const response = await axios.get(`${API_URL}/api/calendar/events?start=${state.calendar_start}&end=${state.calendar_end}`)
        commit('SET_CALENDAR_EVENTS', response.data)
      } catch (error) {
        commit('SET_ERRORS', { title : 'Error on fetchCalendarEvents', message : error.message, type : 'error' })
      }
    },
  },

  getters: {

    start           : state => state.start,
    end             : state => state.end,
    settings        : state => state.settings,
    schedule        : state => state.schedule,
    event_types     : state => state.event_types,
    shows           : state => state.shows,
    calendar_events : state => state.calendar_events,

    errors : state => state.errors,

  }

})
