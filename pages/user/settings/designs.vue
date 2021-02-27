<template>
  <div class="setting-block">
    <div class="setting-title font-16 fw-500">Designs</div>
    <div class="setting-body white-bg-color">
    <table class="table table-striped">
      <thead>
      <tr>
        <td></td>
        <td>Title</td>
        <td>Status</td>
        <td>Actions</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="design in designs" :key="design.id">
        <td><img :src="design.images.thumbnail" width="100">
        </td>
        <td>{{design.title}}</td>
        <td>{{design.is_live ? 'Published' : "Draft"}}</td>
        <td>
          <nuxt-link :to="{name: 'designs.edit', params: {id: design.id}}">Edit</nuxt-link>
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Designs',
  data() {
    return {
      designs: [],
    };
  },
  methods: {
    async fetchDesigns() {
      const { data } = await this.$axios.get(`/users/${this.$auth.user.id}/designs`);
      this.designs = data.data;
    },
  },
  created() {
    this.fetchDesigns();
  },
};
</script>

<style scoped>

</style>
