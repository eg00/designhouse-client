<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Resend Verification Email
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-success :form="form">
          We have send the verification email
        </alert-success>
        <div class="form-group">
          <label>
            <input
              v-model.trim="form.email"
              type="email"
              name="email"
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

        <div class="text-right">
          <button type="submit" class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase">
            Resend
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Form from 'vform'

export default {
  name: 'Resend',
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
      this.form.post('/verification/resend')
        .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>

</style>
