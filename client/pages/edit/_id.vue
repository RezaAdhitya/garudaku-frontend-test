<template>
  <div>
    <h1>THIS IS EDIT</h1>
    <form v-on:submit.prevent="handleSubmitForm(formData)">

      <div class="form-content">
        <p>title</p>
        <input v-model="formData.title" type="text" placeholder="input here" >
      </div>

      <div class="form-content">
        <p>article</p>
        <textarea v-model="formData.article" rows="5"></textarea>
      </div>

      <div class="form-content">
        <p>image</p>
        <input v-model="formData.image" type="text" placeholder="input here" >
      </div>


      <div class="submit-button">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      formData: {
        title: '',
        article: '',
        image: ''
      }
    }
  },
  computed: {
    ...mapState(['fetchedNews']),
    ...mapGetters(['getDetail']),
    setDetail() {
      return this.getDetail(this.$route.params.id)
    }
  },
  methods: {
    ...mapActions(['fetchDetailNews', 'editNews']),
    updateFormData() {
      let newsDetail = this.getDetail(this.$route.params.id)
      this.formData.title = newsDetail.title
      this.formData.article = newsDetail.article
      this.formData.image = newsDetail.image
    },
    handleSubmitForm(formData) {
      this.editNews({id: this.$route.params.id, formData})
      this.$router.push(`/details/${this.$route.params.id}`)
    }
  },
  
  created() {
    if(this.fetchedNews.length > 0) {
      this.updateFormData()
    } else {
      this.$router.push('/')
    }
  }
}
</script>