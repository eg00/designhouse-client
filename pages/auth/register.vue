<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Register {{ form.errors.has('name') }}
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-success :form="form">
          We have sent you an email to activate your account.
        </alert-success>
        <base-input
          v-model.trim="form.name"
          field="name"
          :form="form"
          placeholder="Full Name"
          type="text"
        />
        <base-input
          v-model.trim="form.username"
          field="username"
          :form="form"
          placeholder="username"
          type="text"
        />
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
        <base-input
          v-model.trim="form.password_confirmation"
          field="password_confirmation"
          :form="form"
          placeholder="password_confirmation"
          type="password"
        />

        <div class="text-right">
          <base-button :uppercase="true" :loading="form.busy" class-list="primary-bg-color font-16 fw-500">
            Register
          </base-button>
        </div>
        <p class="font-14 fw-400 text-center mt-4">
          Already have an account?
          <nuxt-link :to="{name:'login'}" class="color-blue">
            Login
          </nuxt-link>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
import Form from 'vform'
import BaseButton from '~/components/_global/buttons/_base-button'

export default {
  name: 'Register',
  components: { BaseButton },
  middleware: ['guest'],
  data () {
    return {
      form: new Form({
        username: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: ''

      })
    }
  },
  methods: {
    submit () {
      this.form.post('/register')
        .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>

</style>
