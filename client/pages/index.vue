<template>
  <div class="container">
    <Navbar />
    <div class="main-content">
      <div class="news-content">
        <NewsCard
          v-for="news in fetchedNews" :news="news" :key="news.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Navbar from '../components/organisms/Navbar.vue'
import PrimaryButton from '../components/atoms/PrimaryButton.vue'
import NewsCard from '../components/molecules/NewsCard.vue'

export default {
  components: {
    Navbar,
    PrimaryButton,
    NewsCard
  },
  computed: {
    ...mapState(['fetchedNews'])
  },
  methods: {
    ...mapActions(['fetchNews','fetchDetailNews']),
  },
  created() {
    if(this.fetchedNews.length === 0) {
      this.fetchNews()
    }
  }


}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  margin-top: 10vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.main-content {
  // background-color: $primary-500 ;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 1rem;
}

.news-content {
  // background-color: $secondary-800;
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 1rem;
}

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
