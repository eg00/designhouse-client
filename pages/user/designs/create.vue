<template>
  <div>
    <section class="hero text-center bg-secondary text-white">
      <div class="container">
        <h1 class="font-28 fw-600 text-uppercase">
          Upload a design
        </h1>
      </div>
    </section>
    <div class="upload-shot">
      <div class="container">
        <div
          class="row justify-content-center align-items-center text-center"
        >
          <div class="col-md-5">
            <div class="card bg-white shadow-sm">
              <div class="d-flex flex-column justify-content-center p-1">
                <div v-if="error" class="alert alert-danger">
                  <p>An error occurred  during the upload process</p>
                  <p>{{ error }}</p>
                </div>
                <slim-cropper :options="slimOptions" class="">
                  <input type="file" name="image">
                </slim-cropper>
                <div v-if="uploading" class="text-success mt-2">
                  <i class="fas fa-spinner fa-spin" />
                </div>
              </div>
            </div>
            <div class="upload-para mt-2">
              <p class="font-14 fw-400">
                JPG, GIF or PNG. Dribbble shots are
                <strong>400 × 300</strong> pixels or
                <strong>800 × 600</strong> (for HiDPI
                displays).
              </p>
              <p class="font-12 fw-300">
                If your image is bigger than the sizes
                above, we’ll help you crop it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slim from '@/components/slim/slim.vue'

export default {
  name: 'Create',
  components: {
    'slim-cropper': Slim
  },
  middleware: ['auth'],
  data () {
    return {
      slimOptions: {
        service: this.slimService,
        post: 'output',
        defaultInputName: 'image',
        minSize: '800,600',
        label: 'Select Image...',
        maxFileSize: 2 // MB
      },
      uploading: false,
      error: ''
    }
  },
  methods: {
    slimService (formData, progress, success, failure, slim) {
      this.uploading = true
      this.$axios.post('/designs', formData)
        .then(({ data }) => {
          this.$router.push({
            name: 'designs.edit',
            params: { id: data.id }
          })
        })
        .catch((err) => {
          const message = err.response.data.errors
          this.error = message[Object.keys(message)[0]][0]
          failure(500)
        })
        .finally(() => (this.uploading = false))
    }
  }
}
</script>

<style scoped>

</style>
