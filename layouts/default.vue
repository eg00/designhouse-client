<template>
  <div>
    <Navigation />
    <div class="wrapper">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
import Navigation from '~/layouts/navigation'
import Footer from '~/layouts/footer'

export default {
  components: { Footer, Navigation }
}
</script>
