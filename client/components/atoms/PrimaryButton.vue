<template>
  <button class="button-primary" :class="aux" v-bind="$attrs" v-on="$listeners">{{buttonText}}</button>
</template>

<script>
  export default {
    props: ['buttonText', 'aux']
  }

</script>

<style lang="scss" scoped>
  .button-primary {
  font-style: inherit;
  font-size: inherit;
  font-family: inherit;
  border: none;
  background-color: $primary-500;
  appearance: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: $secondary-500;
  cursor: pointer;
}

.button-primary:hover {
  background-color: $primary-400;
  transition: $transition;
}
</style>