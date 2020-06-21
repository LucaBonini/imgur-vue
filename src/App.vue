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
export default {
  name: 'App',
  components: {
    Header
  },
  beforeCreate() {
    console.log(this.$parent.$options, 'TITI')
  }
}
</script>
