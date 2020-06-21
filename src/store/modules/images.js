import api from '../../api/imgur'
import { router } from '../../main'

const state = {
  images: []
}

const getters = {
  allImages: (state) => state.images
}

const mutations = {
  setImages: (state, images) => {
    state.images = images
  },
  clearImages: (state) => {
    state.images = []
  }
}

const actions = {

  async fetchMyImages({ rootState, commit, dispatch }) {
    const { token } = rootState.auth
    await dispatch('wipeImages')
    try {
      const response = await api.fetchMyImages(token)     
      commit('setImages', response.data.data)
    } catch (error) {
      console.log(error, 'ERROR')
    }
  },
  wipeImages({ commit }) {
    return new Promise(resolve => {
      commit('clearImages')
      resolve()
    })
  },
  async uploadImages({ rootState }, images) {
    const { token } = rootState.auth
    await api.uploadImages(images, token)
    router.push('/')
  },

  async fetchFavorites({ rootState, commit, dispatch }) {
    const { username, token } = rootState.auth
    await dispatch('wipeImages')
    try {
      const response = await api.fetchFavorites(username, token)
      console.log(response, 'FAVVV')
      commit('setImages', response.data.data)
    } catch (error) {
      console.log(error, 'ERROR')
    }
  }
}

export default { state, getters, mutations, actions }
