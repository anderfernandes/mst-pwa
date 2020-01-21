import { API_URL } from '../constants'

export default {
  state: {
    shows: [],
    page: 1,
    filter: null,
    total: null,
    current_page: 1
  },
  mutations: {
    SET_SHOWS(state, payload) {
      Object.assign(state, {
        shows:
          state.page < 3 ? payload.data : [...state.shows, ...payload.data],
        total: payload.total,
        current_page: payload.current_page
      })
    },
    SET_FILTER(state, payload) {
      Object.assign(state, { filter: payload })
    },
    SET_PAGE(state, payload) {
      Object.assign(state, { page: payload })
    }
  },
  actions: {
    async fetchShows({ commit, state }) {
      try {
        const url = new URL('/api/public/shows?paginate=9', API_URL)
        const params = new URLSearchParams(url.search)
        params.set('page', state.page++)
        url.search = params.toString()
        const response = await fetch(url.toString())
        commit('SET_SHOWS', await response.json())
      } catch (error) {
        commit('SET_ERRORS', {
          title: 'Error on fetchShows',
          message: error.message,
          type: 'error'
        })
        alert(`Error on fetchShows: ${error.message}`)
      }
    }
  },
  getters: {}
}
