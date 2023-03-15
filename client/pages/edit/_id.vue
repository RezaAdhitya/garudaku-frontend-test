<template>
  <div class="container">
    <Navbar />
    <BigTitle
      :text="'Article Edit'"
      class="big-title"
    />
    <EditForm/>
  </div>
</template>

<script>
import Navbar from '../../components/organisms/Navbar.vue'
import BigTitle from '../../components/atoms/BigTitle.vue'
import EditForm from '../../components/organisms/EditForm.vue'
export default {
  components: {
    Navbar,
    BigTitle,
    EditForm,
  },
}
</script>

<style lang="scss" scoped >
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
  width: 100%;
}
.big-title {
  margin-bottom: 2rem;
}
</style>