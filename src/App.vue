<template>
  <div>
    <Header></Header>
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import store from './store'
export default {
  store,
  name: 'App',
  components: {
    Header
  }
}
</script>
<style scoped>
  .ui.container {
    padding: 20px 0 20px 0 !important;
  }
</style>
