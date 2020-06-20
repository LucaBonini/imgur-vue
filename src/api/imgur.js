const CLIENT_ID = 'e2280bf8bd36a74';
const ROOT_URL = 'https://api.imgur.com'
const GET_IMAGES_PATH = '3/account/me/images'
// const POST_UPLOAD = '3/upload'

import qs from 'qs'
import axios from 'axios'

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: 'token'
    }
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`
  },

  fetchImages(token) {
    return axios.get(`${ROOT_URL}/${GET_IMAGES_PATH}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },

  // uploadImage(token) {

  // }
}
