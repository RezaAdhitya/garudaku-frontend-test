<template>
  <div class="container">
    <Navbar />
    <ImageBanner
      :source="getDetail($route.params.id)?.bigImage"
    />
    <TextTitle
      :text="getDetail($route.params.id)?.title"
    />
    <RichTextArticle
      :text="getDetail($route.params.id)?.article"
    />
    <DetailPageButtons/>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Navbar from '../../components/organisms/Navbar.vue'
import DetailPageButtons from '../../components/molecules/DetailPageButtons.vue'
import RichTextArticle from '../../components/atoms/RichTextArticle.vue'
import TextTitle from '../../components/atoms/TextTitle.vue'
import ImageBanner from '../../components/atoms/ImageBanner.vue'
export default {
  components: {
    Navbar,
    DetailPageButtons,
    RichTextArticle,
    TextTitle,
    ImageBanner
  },
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
  padding: 1rem 5rem;
}
</style>