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
    { path: '/', component: ImageList },
    { path: '/upload', component: UploadForm },
    { path: '/oauth2/callback', component: AuthHandler }
  ]
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
