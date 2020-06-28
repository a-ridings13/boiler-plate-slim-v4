import moment from 'moment'
import Vue from 'vue'

const DEFAULT_SESSION = {
  access_token: '',
  expires: 0,
  expires_in: 0,
  refresh_token: '',
  token_type: 'Bearer'
}

export default {
  namespaced: true,
  state: () => {
    return {
      DEFAULT_SESSION
    }
  },
  getters: {
    isLoggedIn(state) {
      if (state.expires === 0) {
        return false
      }

      return (moment(state.expires).diff(moment().unix()) > 0)
    }
  },
  mutations: {
    setAccessToken: (state, tokenPayload) => {
      Vue.set(state, 'access_token', tokenPayload.access_token)
      Vue.set(state, 'expires', moment().add(tokenPayload.expires_in, 'seconds').unix())
      Vue.set(state, 'expires_in', tokenPayload.expires_in)
      Vue.set(state, 'refresh_token', tokenPayload.refresh_token)
      Vue.set(state, 'token_type', tokenPayload.token_type)
    },
    setSession: (state, session) => {
      Object.keys(session).forEach(k => {
        Vue.set(state, k, session[k])
      })
    }
  },
  actions: {
    logout({ commit }) {
      commit('setSession', DEFAULT_SESSION)
    }
  }
}
