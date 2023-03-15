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
    font-size: 1.5rem;
    font-weight: bold;
    color: $primary-500;
    text-align: left;
    margin-bottom: 0.5rem;
  }
</style>