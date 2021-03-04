<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Resend Password Reset
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-success v-if="status" :form="form">
          We have e-mailed you password reset link
        </alert-success>
        <div class="form-group">
          <input
            v-model.trim="form.email"
            :class="{'is-invalid': form.errors.has('email')}"
            class="form-control form-control-lg font-14 fw-300"
            name="email"
            placeholder="email"
            type="email"
          >
          <has-error
            :form="form"
            field="email"
            ro
          />
        </div>

        <div class="text-center">
          <base-button :loading="form.busy" :uppercase="true" class-list="primary-bg-color font-16 fw-500">
            Resend
          </base-button>
        </div>
        <p class="font-14 fw-400 text-center mt-4">
          <nuxt-link :to="{name:'login'}" class="color-blue">
            Back to login
          </nuxt-link>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
import Form from 'vform';

export default {
  name: 'ResetEmail',
  middleware: ['guest'],
  data() {
    return {
      status: null,
      form: new Form({
        email: '',
      }),
    };
  },
  methods: {
    submit() {
      this.form.post('/password/email')
        .then(({ data }) => {
          this.status = data.status;
          this.form.reset();
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style scoped>

</style>
