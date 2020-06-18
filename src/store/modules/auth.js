import api from '../../api/imgur'
import qs from 'qs'
import { router } from '../../main'

const state = {
  token: window.localStorage.getItem('vue_imgur_token')
}

const getters = {
  isLoggedIn: (state) => !!state.token
}

const actions = {
  logout: ({ commit }) => {
    commit('setToken', null)
    window.localStorage.removeItem('vue_imgur_token')
  },
  login: () => {
    api.login()
  },
  finalizeLogin: ({ commit }, hash) => {
    // const [
    //   accessToken, 
    //   expiresIn, 
    //   refreshToken, 
    //   accountUsername, 
    //   accountId] = hash.replace('#','').split('&').map(data => data.split('=')[1])
    //   console.log(accessToken, refreshToken, expiresIn, accountId, accountUsername)
    if (!window.localStorage.getItem('vue_imgur_token')) {
      const query = qs.parse(hash.replace('#', ''))
      commit('setToken', query.access_token)
      window.localStorage.setItem('vue_imgur_token', query.access_token)
      router.push('/')
    }
  }
}

const mutations = {
  setToken: (state, token) => {
    state.token = token
  }
}

export default { state, getters, actions, mutations}