<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Login
      </h1>
      <form class="auth-form" action="" method="" @submit.prevent="submit">
        <alert-error v-if="form.errors.has('verification')" :form="form">
          {{ form.errors.get('verification') }}
          <nuxt-link
            :to="{name: 'verification.resend'}"
          >
            Resend verification email
          </nuxt-link>
        </alert-error>

        <base-input
          v-model.trim="form.email"
          field="email"
          :form="form"
          placeholder="email"
          type="email"
        />
        <base-input
          v-model.trim="form.password"
          field="password"
          :form="form"
          placeholder="password"
          type="password"
        />
        <div class="mt-4 mb-4 clearfix">
          <nuxt-link to="/password/email" class="forgot-pass color-blue font-14 fw-400">
            Forgot password?
          </nuxt-link>
        </div>
        <div class="text-right">
          <base-button :uppercase="true" :loading="form.busy" class-list="primary-bg-color font-16 fw-500">
            Login
          </base-button>
        </div>
        <p class="font-14 fw-400 text-center mt-4">
          Don't have an account yet?
          <nuxt-link :to="{name: 'register'}" class="color-blue">
            Create an account
          </nuxt-link>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
import Form from 'vform'
import BaseButton from '~/components/_global/buttons/_base-button'
import BaseInput from '~/components/_global/inputs/_base-input'

export default {
  name: 'Login',
  components: { BaseInput, BaseButton },
  data () {
    return {
      form: new Form({
        email: '',
        password: ''
      })
    }
  },
  methods: {
    submit () {
      this.$auth.loginWith('local', { data: this.form })
        .then(({ data }) => console.log(data))
        .catch((e) => {
          this.form.errors.set(e.response.data.errors)
        })
    }
  }
}
</script>

<style scoped>

</style>
