<template>
  <button
    :disabled="loading"
    :type="nativeType"
    class="btn"
    :class="{
      [`btn-${type}`]: true,
      [`btn-block`]: block,
      [`text-uppercase`]: uppercase,
      [`btn-${size}`]: true,
    }"
  >
    <span v-if="loading">
      <i class="fas fa-spinner fa-spin" />
    </span>
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    nativeType: {
      type: String,
      default: 'submit'
    },
    loading: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    },
    uppercase: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
