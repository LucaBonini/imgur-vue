import api from '../../api/imgur'
import qs from 'qs'
import { router } from '../../main'

const state = {
  token: (JSON.parse(window.localStorage.getItem('vue_imgur_app'))|| {}).token,
  username: (JSON.parse(window.localStorage.getItem('vue_imgur_app')) || {}).username
}

const getters = {
  isLoggedIn: (state) => !!state.token,
  getUsername: (state) => state.username
}

const actions = {
  logout: ({ commit }) => {
    commit('setToken', null)
    commit('setUsername', null)
    window.localStorage.removeItem('vue_imgur_app')
  },
  login: () => {
    api.login()
  },
  finalizeLogin: async ({ commit, dispatch }, hash) => {
    const query = qs.parse(hash.replace('#', ''))
    await dispatch('setUsername', query.account_username)
    commit('setToken', query.access_token)
    window.localStorage.setItem('vue_imgur_app', JSON.stringify({token: query.access_token, username: query.account_username}))
    router.push('/')
  },
  setUsername: ({ commit }, username) => {
    return new Promise((resolve) => {
      commit('setUsername', username)
      resolve()
    })
  }
}

const mutations = {
  setToken: (state, token) => {
    state.token = token
  },
  setUsername: (state, username) => {
    state.username = username
  }
}

export default { state, getters, actions, mutations}