<template>
  <div class="card">
    <div class="image">
      <img src="" alt="image preview" ref="imgPrev">
    </div>
    <div class="content">
      <div class="ui input fluid">
        <input type="text" placeholder="Title..." v-model="title">
      </div>
      <div class="ui input fluid">
        <input type="text" placeholder="Description..." v-model="description">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImageForm',
  props: ['image', 'id'],
  data() {
    return {
      title: '',
      name: '',
      description: ''
    }
  },
  mounted() {
    let reader = new FileReader()
    reader.onload = (e) => {
      this.$refs.imgPrev.src = e.target.result
    }
    reader.readAsDataURL(this.image)
  },
  watch: {
    title(newValue) {
      this.$emit('updateValue', {id: this.id, field: 'title', content: newValue})
    },
    description(newValue) {
      this.$emit('updateValue', {id: this.id, field: 'description', content: newValue})
    }
  }
}
</script>