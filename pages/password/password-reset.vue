<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Reset Password
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-success :form="form">
          {{ status }}
          <p>
            <nuxt-link to="/login">
              Proceed to login
            </nuxt-link>
          </p>
        </alert-success>
        <div class="form-group">
          <label>
            <input
              v-model.trim="form.email"
              type="email"
              name="email"
              disabled
              class="form-control form-control-lg font-14 fw-300"
              :class="{'is-invalid': form.errors.has('email')}"
              placeholder="email"
            >
          </label>
          <has-error
            :form="form"
            ro
            field="email"
          />
        </div>
        <div class="form-group">
          <input
            v-model.trim="form.password"
            type="password"
            name="password"
            class="form-control form-control-lg font-14 fw-300"
            :class="{'is-invalid': form.errors.has('password')}"
            placeholder="Password"
          >
          <has-error
            :form="form"
            field="password"
          />
        </div>
        <div class="form-group">
          <input
            v-model.trim="form.password_confirmation"
            type="password"
            name="password_confirmation"
            class="form-control form-control-lg font-14 fw-300"
            :class="{'is-invalid': form.errors.has('password_confirmation')}"
            placeholder="Confirm Password"
          >
          <has-error
            :form="form"
            field="password_confirmation"
          />
        </div>

        <div class="text-right">
          <base-button :uppercase="true" :loading="form.busy" class-list="primary-bg-color font-16 fw-500">
            Resend
          </base-button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Form from 'vform'
import BaseButton from '~/components/_global/buttons/_base-button'

export default {
  name: 'PasswordReset',
  components: { BaseButton },
  data () {
    return {
      form: new Form({
        email: '',
        password: '',
        password_confirmation: '',
        token: ''

      })
    }
  },
  created () {
    this.form.email = this.$route.query.email
    this.form.token = this.$route.params.token
  },
  methods: {
    submit () {
      this.form.post('/password/reset')
        .then(({ data }) => {
          this.status = data.status
          this.form.reset()
        })
        .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>

</style>
