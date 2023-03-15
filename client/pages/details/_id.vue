<template>
  <div>
    THIS IS DETAILS
    DETAIL: {{ getDetail($route.params.id)?.title }}
    <div class="button-edit">
      <button v-on:click="$router.push(`/`)" >Home</button>
      <button v-on:click="$router.push(`/edit/${$route.params.id}`)" >Edit</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState(['fetchedNews', 'newsDetail']),
    ...mapGetters(['getDetail'])
  },
  methods: {
    ...mapActions(['fetchDetailNews']),
  },
  created() {
    if(this.fetchedNews.length === 0) {
      this.$router.push('/')
    }
  }
}
</script>