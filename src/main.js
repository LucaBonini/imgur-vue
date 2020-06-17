import Vue from 'vue'
import App from './App'
import store from './store'
import VueRouter from 'vue-router'
import AuthHandler from './components/AuthHandler'

const router = new VueRouter({
  mode: 'history', // browser router mode
  routes: [
    { path: '/oauth2/callback', component: AuthHandler }
  ]
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
