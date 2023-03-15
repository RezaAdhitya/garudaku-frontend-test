<template>
  <div class="detail-title">
    <p>{{ text }}</p>
  </div> 
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="scss" scoped>
.detail-title {
  margin: 2rem 0 ;
  padding-bottom: 1rem;
  border-bottom: $primary-500 2px solid;

  p {
    font-size: 2rem;
    font-weight: bold;
    color: $primary-500;
  }
}
</style>