<template>
  <div>
    <div v-if="isLoggedIn">
      <div v-if="!allImages.length">
        fetching images...
      </div>
      <div v-else class="images-container">
        <div v-for="image in allImages" :key="image.id">
          <img :src="image.link" alt="image" class="img-column">
        </div>
      </div>
    </div>
    <div v-else>
      <h2>Login to start!</h2>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ImageList',
  methods: {
    ...mapActions(['fetchImages']),
  },
  computed: {
    ...mapGetters(['allImages', 'isLoggedIn'])
  },
  created() {
    this.fetchImages()
  }
}
</script>
<style scoped>
  .images-container {
    column-count: 3;
    column-gap: 0;
  }
  .img-column {
    max-width: 100%;
    padding: 5px;
  }
</style>