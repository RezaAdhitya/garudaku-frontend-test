<template>
  <div class="detail-article">
    <p v-html="text"></p>
  </div> 
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="scss" scoped>
.detail-article {

margin: 1rem 0 ;
padding: 0 2rem;
padding-bottom: 1rem;
max-width: 100%;
height: fit-content;
overflow: hidden;


p {
  font-size: 1rem;
  color: black;
  white-space: pre-wrap;
  text-align: justify;
}
}
</style>