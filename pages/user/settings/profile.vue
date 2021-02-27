<template>
  <div class="setting-block" id="list-item-1">
    <div class="setting-title font-16 fw-500">
      Account Information
    </div>
    <div class="setting-body white-bg-color">
      <div class="row">
        <div class="col-md-6">
          <alert-success :form="form">Profile information updated successfully</alert-success>
          <form class="custom-form" @submit.prevent="update">
            <base-input
              v-model="form.name"
              field="name"
              :form="form"
              placeholder="Full name"
            />
            <base-input
              v-model="form.tagline"
              field="tagline"
              :form="form"
              placeholder="tagline"
            />

            <base-textarea
              v-model="form.about"
              field="about"
              :rows="4"
              :form="form"
              placeholder="Tell us about you"
            />
            <div class="form-group">
              <label
                class="font-14 fw-500"
              >Location</label
              >
            <base-gmap
              :initialValue="form.formatted_address"
              @address-response="handleAddress"></base-gmap>
            </div>

            <div
              class="custom-control custom-checkbox mt-2 font-14 fw-300"
            >
              <input
                type="checkbox"
                class="custom-control-input"
                id="available_to_hire"
                v-model="form.available_to_hire"
              />
              <label
                class="custom-control-label"
                for="available_to_hire"
              >
                Available to hire?
              </label>
            </div>
            <div
              class="mt-2 font-14 fw-300 text-right"
            >
              <base-button
                :loading="form.busy"
                class-list="primary-bg-color font-16 fw-500"
              >
                Save
              </base-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform';

export default {
  name: 'profile',
  data() {
    return {
      form: new Form({
        name: '',
        about: '',
        tagline: '',
        formatted_address: '',
        location: {},
        available_to_hire: false,
      }),
    };
  },
  methods: {
    update() {
      this.form.put('/settings/profile')
        .then(() => this.$auth.fetchUser())
        .catch((e) => console.log(e));
    },
    handleAddress(data) {
      this.form.formatted_address = data.formatted_address;
      this.form.location.latitude = data.latitude;
      this.form.location.longitude = data.longitude;
    },
  },
  mounted() {
    const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
    Object.keys(this.form).forEach((key) => {
      if (has.call(this.$auth.user, key)) {
        this.form[key] = this.$auth.user[key];
      }
    });

    this.form.location = {
      longitude: this.$auth.user.location ? this.$auth.user.location.coordinates[0] : null,
      latitude: this.$auth.user.location ? this.$auth.user.location.coordinates[1] : null,
    };
  },
};
</script>

<style scoped>

</style>
