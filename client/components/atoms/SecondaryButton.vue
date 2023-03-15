<template>
  <button class="button-secondary" :class="aux" v-bind="$attrs" v-on="$listeners">{{buttonText}}</button>
</template>

<script>
  export default {
    props: ['buttonText', 'aux']
  }

</script>

<style lang="scss" scoped>
  .button-secondary {
  font-style: inherit;
  font-size: inherit;
  font-family: inherit;
  border: none;
  background-color: $secondary-700;
  appearance: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
}

.button-secondary:hover {
  background-color: $secondary-600;
  transition: $transition;
}
</style>