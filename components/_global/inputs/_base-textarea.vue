<template>
  <div class="form-group">
    <label>
      <textarea
        :value="value"
        :rows="rows"
        :name="field"
        class="form-control form-control-lg font-14 fw-300"
        :class="{'is-invalid': form.errors.has(field)}"
        :placeholder="placeholder"
        @input="handleInput"
      />
      <has-error
        :form="form"
        :field="field"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'BaseTextarea',
  props: {
    form: {
      type: Object,
      required: true,
    },
    field: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    rows: {
      type: Number,
      default: 3,
    },
  },
  mounted() {
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style scoped>

</style>
