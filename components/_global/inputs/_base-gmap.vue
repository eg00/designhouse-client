<template>
<client-only>
  <gmap-autocomplete
    @place_changed="handleChange"
  :selectFirstOnEnter="true"
    :options="{
    types: ['(cities)']
    }"
  >
    <template v-slot:input="slotProps">
      <input
        ref="input"
        :value="formatted_address"
        class="form-control"
        v-on:listeners="slotProps.listeners"
        v-on:attrs="slotProps.attrs"
        type="text">
    </template>
  </gmap-autocomplete>
</client-only>
</template>

<script>
export default {
  name: 'BaseGmap',
  props: {
    initialValue: {
      required: false,
      type: String,
      default: '',
    },
  },
  data() {
    return {
      formatted_address: '',
    };
  },
  watch: {
    initialValue(value) {
      this.formatted_address = value;
    },
  },
  methods: {
    handleChange(place) {
      if (!place || !place.geometry) {
        this.$emit('no-results-found', place);
        return false;
      }

      if (place.address_components) {
        const data = {};
        data.latitude = place.geometry.location.lat();
        data.longitude = place.geometry.location.lng();
        data.formatted_address = place.formatted_address;
        this.$emit('address-response', data);
        return true;
      }
      this.$emit('no-results-found', place);
      return false;
    },
  },
};
</script>

<style scoped>

</style>
