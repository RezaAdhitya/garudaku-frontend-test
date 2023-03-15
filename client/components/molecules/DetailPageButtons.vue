<template>
  <div class="detail-button">
    <SecondaryButton
      v-on:click.prevent="$router.push(`/`)"
      
      :buttonText="'Back to home'"
    />
    <PrimaryButton
      v-on:click.prevent="$router.push(`/edit/${$route.params.id}`)"
      :buttonText="'Edit Article'"
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
.detail-button {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}
</style>