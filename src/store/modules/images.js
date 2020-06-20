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
  }
}

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth
    let response = []
    try {
      response = await api.fetchImages(token)      
    } catch (error) {
      console.log(error, 'ERROR')
    }
    commit('setImages', response.data.data)
  },
  async uploadImages({ rootState }, images) {
    const { token } = rootState.auth
    await api.uploadImages(images, token)
    router.push('/')
  }
}

export default { state, getters, mutations, actions }
