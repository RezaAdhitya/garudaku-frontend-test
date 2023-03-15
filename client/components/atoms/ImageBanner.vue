<template>
  <div class="image-banner">
    <img :src="source" />
  </div>
</template>

<script>
export default {
  props: ['source']
}
</script>

<style lang="scss" scoped>
.image-banner {
  width: 100%;
  height: 500px;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: $shadow-primary;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 10%;
  }
}
</style>