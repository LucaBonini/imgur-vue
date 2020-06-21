<template>
  <div>
    <div v-if="!imagesToUpload.length" class="dropper">
      <input 
        type="file" 
        @change="previewImages($event.target.files)" 
        multiple
        accept="image/*"
      />
      <span>Drag files here!</span>
    </div>
    <div v-else>
      <div class="ui cards">
          <ImageForm v-for="(image, index) in imagesToUpload" 
            :key="index" 
            :image="image"
            @updateValue="onUpdateValue"
            :id="index"
          />
      </div>
      <button class="fluid ui button" @click="upload">Upload</button>
    </div>
  </div>
</template>

<script>
import  { mapActions } from 'vuex'
import ImageForm from './ImageForm'

export default {
  name: 'UploadForm',
  components: {
    ImageForm
  },
  methods: {
    ...mapActions(['uploadImages']),
    previewImages(images) {
      this.imagesToUpload = images
    },
    onUpdateValue(newValue) {
      this.imagesData = {
        ...this.imagesData,
        [newValue.id]: {
          ...(this.imagesData[newValue.id] || {}),
          [newValue.field]: newValue.content
        }
      }
    },
    upload() {
      const data = Array.from(this.imagesToUpload).map((image, index) => {
        return {
          image: image,
          ...this.imagesData[index]
        }
      })
      this.uploadImages(data)
    }
  },
  data() {
    return {
      imagesToUpload: [],
      imagesData: {}
    }
  }
}
</script>

<style scoped>
  .dropper {
    height: 30vh;
    border: 2px dashed black;
    border-radius: 5px; 
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  input {
    width: 100%;
    height: 30vh;
    position: absolute;
    opacity: 0;
  }
  .dropper:hover {
    background-color: #eee;
  }
  button {
    margin-top: 20px !important;
  }
</style>