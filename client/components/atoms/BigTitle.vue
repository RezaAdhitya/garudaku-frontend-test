<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="scss" scoped>
  p {
    font-size: 2rem;
    font-weight: bold;
    color: $primary-500;
  }
</style>