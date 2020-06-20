<template>
  <div>
    <div v-if="!allImages.length">
      fetching images...
    </div>
    <div v-else class="ui grid">
      <div v-for="image in allImages" :key="image.id" class="four wide column">
        <img :src="image.link" alt="image" class="img-column">
      </div>
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
    ...mapGetters(['allImages'])
  },
  created() {
    this.fetchImages()
  }
}
</script>
<style scoped>
  .img-column {
    max-width: 100%;
  }
</style>