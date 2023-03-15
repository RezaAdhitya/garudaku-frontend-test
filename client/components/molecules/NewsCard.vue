<template>
  <div class="news-card">
    <img :src="`${news.bigImage}`" class="card-image" />
    <div class="card-content">
      <p class="card-title">{{ news.title }}</p>
      <PrimaryButton 
        v-on:click="$router.push(`/details/${news.id}`)"
        :buttonText="'See Details'"
        :aux="'aux-1'"
      />
    </div>
  </div>
</template>

<script>
import PrimaryButton from '../atoms/PrimaryButton.vue'
export default {
  props: ['news'],
  components: {
    PrimaryButton
  },
}
</script>

<style lang="scss" scoped>
.news-card {
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 400px ;
  overflow-wrap: break-word;
  overflow: hidden;
  background-color: $secondary-500;
  border-radius: 0.5rem;
  box-shadow: $shadow-primary;

}

.card-image {
  height: 300px;
  width: 400px;
  object-fit: cover;
}

.card-image:hover {
  scale: 1.1;
  transition: $transition-slow;
}

.card-content {
  padding: 1rem;
  margin: 0.5rem 0;
}

.card-title {
  height: 70px;
  font-weight: bold;
  font-size: 1.1rem;
  color: $primary-500;
}
</style>