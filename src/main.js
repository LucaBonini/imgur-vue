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
    { path: '/', component: ImageList, props: {actionToFetch: 'fetchMyImages'} },
    { path: '/upload', component: UploadForm },
    { path: '/oauth2/callback', component: AuthHandler },
    { path: '/favorites', component: ImageList, props: { actionToFetch: 'fetchFavorites' } }
  ]
})
new Vue({
  router,
  store,
  render: h => h(App),
  titi: 'toto'
}).$mount('#app')
