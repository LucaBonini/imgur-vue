import Vue from 'vue'
import App from './App'
import store from './store'
import VueRouter from 'vue-router'
import AuthHandler from './components/AuthHandler'
import UploadForm from './components/UploadForm'
import ImageList from './components/ImageList'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history', // browser router mode
  routes: [
    { path: '/vue-example/', component: ImageList, props: {actionToFetch: 'fetchMyImages'} },
    { path: '/vue-example/upload', component: UploadForm },
    { path: '/vue-example/oauth2/callback', component: AuthHandler },
    { path: '/vue-example/favorites', component: ImageList, props: { actionToFetch: 'fetchFavorites' } }
  ]
})
export default class Vimgur {
  constructor(selector) {
    this._insance = new Vue({
      router,
      store,
      render: h => h(App),
      path
    }).$mount(selector)
  }
}

window.Vimgur = Vimgur