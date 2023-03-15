<template>
  <form>
      <InputContent
        :inputLabel="'Title'"
        :fieldType="'text'"
        :fieldPlaceholder="'Input news title here'"
        :model="formData.title"
        @nextChanged="(value) => {formData.title = value}"
      />
      <div class="form-content">
        <InputLabel
          :text="'Article'"
        />
        <ckeditor v-model="formData.article" ></ckeditor>
      </div>
      <InputContent
        :inputLabel="'Image Url'"
        :fieldType="'text'"
        :fieldPlaceholder="'Input image url here'"
        :model="formData.image"
        @nextChanged="(value) => {formData.image = value}"
      />
      <FormSubmitBtn
        @formSubmission="() => {
          handleSubmitForm(formData)
        }"
      />
    </form>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import CKEditor from 'ckeditor4-vue'
import InputLabel from '../atoms/InputLabel.vue'
import InputContent from '../molecules/InputContent.vue'
import FormSubmitBtn from '../molecules/FormSubmitBtn.vue'
export default {
  components: {
    InputLabel,
    InputContent,
    FormSubmitBtn,
    ckeditor: CKEditor.component,
  },
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
      this.formData.image = newsDetail.bigImage
    },
    handleSubmitForm(formData) {
      console.log('masuk sini ga', formData);
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

<style lang="scss" scoped>
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-content {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 60%;
}
</style>