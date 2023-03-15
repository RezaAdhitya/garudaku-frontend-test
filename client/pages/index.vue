<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Garuda News
      </h1>
      <h2 class="subtitle">
        Welcome to the Garuda News
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
        <div class="main-content">
          <h1>This is news content</h1>
          <div class="news-content">
            <div v-for="news in fetchedNews" class="news-card">
              {{ news.title }}
              <button v-on:click="$router.push(`/details/${news.id}`)" >details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    Logo
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
