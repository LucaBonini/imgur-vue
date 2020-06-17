<template>
  <div>
    <div class="ui secondary pointing menu">
      <a href="/" class="active item">
        Image storage
      </a>
      <div class="right menu">
        <a class="ui item" href="#" @click="login">
          Log in
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Header',
  methods: {
    ...mapActions(['login'])
    // use ...to spread mapActions and be able to add other methods
  }
}
</script>