<template>
  <div class="user-account-setting">
    <div class="container">
      <div class="row">
        <!-- LEFT -->
        <div class="col-sm-3" id="myScrollspy">
          <div class="list-group">
            <nuxt-link v-for="link in links" :key="link.route"
              class="list-group-item list-group-item-action"
              :to="{name: link.route}"
            >
              {{link.title}}
            </nuxt-link>
            <a
              class="list-group-item list-group-item-action"
              href="#"
            >Teams</a
            >
          </div>
        </div>

        <!-- RIGHT -->
        <div class="col-sm-9">
          <router-view/>
        </div>
        <!-- END RIGHT -->
      </div>
    </div>
    <!-- END CONTAINER -->
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      links: [
        { title: 'Dashboard', route: 'settings.dashboard' },
        { title: 'Update profile', route: 'settings.profile' },
      ],
    };
  },
};
</script>

<style scoped>

</style>
