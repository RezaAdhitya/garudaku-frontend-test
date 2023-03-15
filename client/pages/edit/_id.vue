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
    ...mapState(['counter', 'fetchedNews', 'newsDetail']),
    ...mapGetters(['getDetail']),
    setDetail() {
      console.log('this');
      return this.getDetail(this.$route.params.id)
    }
  },
  methods: {
    ...mapActions(['fetchDetailNews', 'editNews']),
    updateFormData() {
      this.formData.title = this.getDetail(this.$route.params.id).title
      this.formData.article = this.getDetail(this.$route.params.id).article
      this.formData.image = this.getDetail(this.$route.params.id).image
    },
    handleSubmitForm(formData) {
      this.editNews(formData)
    }
  },
  
  created() {
   this.updateFormData()
  }
}
</script>