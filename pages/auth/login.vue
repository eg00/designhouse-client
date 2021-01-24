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
        <div class="form-group">
          <input
            v-model.trim="form.email"
            type="email"
            name="email"
            class="form-control form-control-lg font-14 fw-300"
            :class="{'is-invalid': form.errors.has('email')}"
            placeholder="email"
          >
          <has-error
            :form="form"
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
        <div class="mt-4 mb-4 clearfix">
          <a class="forgot-pass color-blue font-14 fw-400" href="#"> Forgot password? </a>
        </div>
        <div class="text-right">
          <button
            type="submit"
            class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase"
            :disabled="form.busy"
          >
            <span v-if="form.busy">
              <i class="fas fa-spinner fa-spin" />
            </span>
            Login
          </button>
        </div>
        <p class="font-14 fw-400 text-center mt-4">
          Don't have an account yet?
          <nuxt-link :to="{name: 'register'}" class="color-blue">
            Create an account
          </nuxt-link>
        </p>
        </nuxt-link>
        </alert-error>
      </form>
    </div>
  </section>
</template>

<script>
import Form from 'vform'

export default {
  name: 'Login',
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
