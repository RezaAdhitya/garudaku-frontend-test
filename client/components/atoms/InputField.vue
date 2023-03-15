<template>
  <input v-model="value" v-on:input="$emit('changed', value)" :type="type" :placeholder="placeholder" >
</template>

<script>
export default {
  props: ['type', 'placeholder','inputModel'],
  emits: ['changed'],
  data() {
    return {
      value: this.inputModel
    }
  },
}
</script>

<style lang="scss" scoped>
  input {
    width: 100%;
    padding: 0.5rem 1rem;
  }
</style>