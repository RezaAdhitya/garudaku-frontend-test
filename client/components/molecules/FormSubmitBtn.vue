<template>
  <div class="submit-button">
    <SecondaryButton
      v-on:click.prevent="$router.push(`/details/${$route.params.id}`)"
      :buttonText="'Cancel'"
    />
    <PrimaryButton
      v-on:click.prevent="$emit('formSubmission')"
      :buttonText="'Submit'"
    />
  </div>
</template>

<script>
import PrimaryButton from '../atoms/PrimaryButton.vue'
import SecondaryButton from '../atoms/SecondaryButton.vue'
export default {
  components: {
    PrimaryButton,
    SecondaryButton
  },
  emits: ['formSubmission']
}
</script>

<style lang="scss" scoped>
.submit-button {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}
</style>