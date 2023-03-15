<template>
  <div>
    THIS IS DETAILS
    DETAIL: {{ getDetail($route.params.id).headline }}
    <div class="button-edit">
      <button v-on:click="$router.push(`/edit/${$route.params.id}`)" >Edit</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      detail: this.getDetail
    }
  },
  computed: {
    ...mapState(['counter', 'fetchedNews', 'newsDetail']),
    ...mapGetters(['getDetail'])
  },
  methods: {
    ...mapActions(['fetchDetailNews']),
  },
  // created() {
  //   let a = this.getDetail(this.$route.params.slug)
  //   console.log(a, 'created');
  // }
}
</script>