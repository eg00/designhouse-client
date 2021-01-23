<template>
  <div>
    <Navigation />
    <div class="wrapper">
      <Nuxt />
    </div>
    <!--    <Footer />-->
  </div>
</template>
<script>
import Navigation from '~/layouts/navigation'

export default {
  components: { Navigation }
}
</script>
