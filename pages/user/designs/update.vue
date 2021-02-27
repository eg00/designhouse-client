<template>
  <div>
    <section class="hero text-center bg-secondary mb-4 text-white">
      <div class="container">
        <h1 class="font-28 fw-600 text-uppercase">
          Upload a design
        </h1>
      </div>
    </section>
    <div class="upload-shot">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="white-bg-color d-flex justify-content-center p-3">
              <img
                :src="design.images.thumbnail"
                alt=""
                class="img-fluid"
              >
            </div>
          </div>
          <div class="col-md-7">
            <div class="card">
              <div class="card-header">
                <h4>
                  Update Design Information
                </h4>
              </div>
              <div class="card-body">
                <form
                  class="auth-form"
                  @submit.prevent="submit"
                >
<alert-success :form="form">Design successfully updated </alert-success>
                  <base-input
                    v-model="form.title"
                    field="title"
                    :form="form"
                    placeholder="Enter a title"
                  />
                  <base-textarea
                    v-model="form.description"
                    field="description"
                    :form="form"
                    placeholder="Enter a Description"
                  />
                  <div class="form-group">
                    <no-ssr>
                      <input-tag
                        v-model="form.tags"
                        on-paste-delimiter=","
                        placeholder="Tags separated by commas"
                      />
                    </no-ssr>
                  </div>
                  <template v-if="teams.length">
                    <div class="form-group custom-control custom-checkbox">
                      <input
                        id="assign_to_team"
                        v-model="form.assign_to_team"
                        type="checkbox"
                        class="custom-control-input"
                      >
                      <label
                        for="assign_to_team"
                        class="custom-control-label"
                      >
                        Assign to team
                      </label>
                    </div>
                    <div class="form-group">
                      <select
                        v-model="form.team"
                        class="custom-select"
                        :class="{'is-invalid': form.errors.has('team')}"
                        :disabled="!form.assign_to_team"
                      >
                        <option :value="null">
                          Select a team
                        </option>
                        <option
                          v-for="team in teams"
                          :key="team.id"
                          :value="team.id"
                        >
                          {{ team.name }}
                        </option>
                      </select>
                      <has-error
                        :form="form"
                        field="team"
                      />
                    </div>
                  </template>
                  <div class="form-group custom-control custom-checkbox">
                    <input
                      id="is_live"
                      v-model="form.is_live"
                      type="checkbox"
                      class="custom-control-input"
                    >
                    <label
                      for="is_live"
                      class="custom-control-label"
                    >
                      Publish this design
                    </label>
                  </div>
                  <div class="text-right">
                    <base-button
                      :uppercase="true"
                      :loading="form.busy"
                      class-list="primary-bg-color font-16 fw-500"
                    >
                      Update Design
                    </base-button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform';
import BaseInput from '@/components/_global/inputs/_base-input.vue';
import BaseTextarea from '@/components/_global/inputs/_base-textarea.vue';

export default {
  name: 'Update',
  components: { BaseTextarea, BaseInput },
  middleware: ['auth'],
  async asyncData({
    $axios,
    params,
    error,
  }) {
    try {
      const design = await $axios.$get(`/designs/${params.id}/byUser`);
      const teams = await $axios.$get('/users/teams');
      return {
        design: design.data,
        teams: teams.data,
      };
      // eslint-disable-next-line no-empty
    } catch (e) {
      if (e.response.status === 404) {
        error({
          statusCode: 404,
          message: 'Design not found',
        });
      } else {
        error({
          statusCode: 500,
          message: 'Server error',
        });
      }
    }
    return true;
  },
  data() {
    return {
      design: {},
      teams: {},
      form: new Form({
        title: '',
        description: '',
        is_live: false,
        tags: [],
        assign_to_team: false,
        team: null,
      }),
    };
  },
  mounted() {
    if (this.design) {
      Object.keys(this.form)
        .forEach((key) => {
          if (this.design.hasOwnProperty(key)) {
            this.form[key] = this.design[key];
          }
        });
      this.form.tags = this.design.tag_list.tags || [];
      if (this.design.team) {
        this.form.team = this.design.team.id;
        this.form.assign_to_team = true;
      } else {
        this.form.assign_to_team = false;
      }
    }
  },
  methods: {
    submit() {
      this.form.put(`/designs/${this.design.id}`)
        .then(({ data }) => {
          // this.status = data.status;
          console.log(data);
          // this.form.reset();
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style scoped>

</style>
