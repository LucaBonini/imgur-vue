<template>
  <div>
    <div v-if="!allImages.length">
      fetching images...
    </div>
    <div v-else class="images-container">
      <div v-for="image in allImages" :key="image.id">
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
  .images-container {
    column-count: 3;
    column-gap: 0;
  }
  .img-column {
    max-width: 100%;
    padding: 5px;
  }
</style>