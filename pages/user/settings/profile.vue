<template>
  <div class="setting-block" id="list-item-1">
    <div class="setting-title font-16 fw-500">
      Account Information
    </div>
    <div class="setting-body white-bg-color">
      <div class="row">
        <div class="col-md-6">
          <form class="custom-form">
            <div class="form-group">
              <label class="font-14 fw-500">Name</label>
              <input type="text"
                     name="name"
                     class="form-control form-control-lg font-14 fw-300"
                     placeholder="Full Name"
              />
            </div>
            <div class="form-group">
              <label class="font-14 fw-500">Tag Line</label>
              <input type="text"
                     class="form-control form-control-lg font-14 fw-300"
                     placeholder="eg. Senior Graphics Designer"
              />
            </div>

            <div class="form-group">
              <label class="font-14 fw-500">About me</label>
              <textarea
                class="form-control font-14 fw-300"
                rows="5"
                placeholder="Tell us about you"
              ></textarea>
            </div>

            <div class="form-group">
              <label
                class="font-14 fw-500"
              >Location</label
              >
              <input
                type="text"
                name="name"
                class="form-control form-control-lg font-14 fw-300"
                placeholder="eg New York, USA"
              />
            </div>

            <div
              class="custom-control custom-checkbox mt-2 font-14 fw-300"
            >
              <input
                type="checkbox"
                class="custom-control-input"
                id="checkBox1"
              />
              <label
                class="custom-control-label"
                for="checkBox1"
              >Available to
                hire?</label
              >
            </div>
            <div
              class="mt-2 font-14 fw-300"
            >
              <button
                class="btn btn-primary"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',

};
</script>

<style scoped>

</style>
