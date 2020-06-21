<template>
  <div>
    <div class="ui secondary pointing menu">
      <router-link to="/" class="active item">
        Image storage
      </router-link>
      <span v-if="isLoggedIn" class="item">Hello {{ getUsername }} ! </span>
      <div class="right menu">
        <div v-if="isLoggedIn" class="horizontal">
          <router-link to="/" class="item">Galleries</router-link>
          <router-link to="/upload" class="item">Upload</router-link>
          <router-link to="/favorites" class="item">My favorites</router-link>
          <a class="ui item" @click="logout">Log out</a>
        </div>
        <a v-else class="ui item" href="#" @click="login">
          Login
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Header',
  methods: {
    ...mapActions(['login', 'logout'])
    // use ...to spread mapActions and be able to add other methods
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'getUsername'])
  }

}
</script>
<style scoped>
  .horizontal {
    display: flex;
    flex-direction: row;
  }
</style>