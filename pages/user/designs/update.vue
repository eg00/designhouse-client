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
              <img :src="design.images.thumbnail" alt="" class="img-fluid">
            </div>
          </div>
          <div class="col-md-7">
            <h4>Update Design Information</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform';

export default {
  name: 'Update',
  middleware: ['auth'],
  async asyncData({
    $axios,
    params,
    error,
    redirect,
  }) {
    try {
      const design = await $axios.$get(`/designs/${params.id}`);
      return { design: design.data };
      // eslint-disable-next-line no-empty
    } catch (e) {
      if (e.response.status === 404) {
        error({ statusCode: 404, message: 'Design not found' });
      } else {
        error({ statusCode: 500, message: 'Server error' });
      }
    }
  },
  data() {
    return {
      design: {},
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
            this.form[key] = this.design;
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

    },
  },
};
</script>

<style scoped>

</style>
