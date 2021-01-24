<template>
  <div class="container">
    homepage
    {{ $auth.loggedIn }}
    <div class="bg-danger">
      <i class="fas fa-user" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>
