<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Email Verification
      </h1>
      {{ name }}
      <form class="auth-form">
        <div v-if="success" class="form-group">
          <div class="alert alert-success">
            {{ status }}
          </div>
          <nuxt-link :to="{name: 'login'}">
            Proceed to Login
          </nuxt-link>
        </div>
        <div v-else class="form-group">
          <div class="alert alert-danger">
            {{ status }}
          </div>
          <nuxt-link
            :to="{name: 'verification.resend'}"
          >
            Resend verification link
          </nuxt-link>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Verify',
  middleware: ['guest'],
  async asyncData ({
    params,
    query,
    app
  }) {
    const q = Object.keys(query).map(k => `${k}=${query[k]}`).join('&')

    try {
      const { data } = await app.$axios.post(
        `/verification/verify/${params.id}?${q}`
      )
      return { success: true, status: data.message }
    } catch (e) {
      return { success: false, status: e.response.data.errors.message }
    }
  }
}
</script>

<style scoped>

</style>
