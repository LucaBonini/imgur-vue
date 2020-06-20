import api from '../../api/imgur'

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
  }
}

export default { state, getters, mutations, actions }
