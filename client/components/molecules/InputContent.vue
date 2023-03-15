<template>
  <div class="form-content">
    <InputLabel
      :text="inputLabel"
    />
    <InputField
      :inputModel="model"
      :type="fieldType"
      :placeholder="fieldPlaceholder"
      @changed="(value) =>{$emit('nextChanged', value)}"
    />
  </div>
</template>

<script>
import InputLabel from '../../components/atoms/InputLabel.vue'
import InputField from '../../components/atoms/InputField.vue'
export default {
  props: ['inputLabel', 'fieldType', 'fieldPlaceholder', 'model'],
  components: {
    InputField,
    InputLabel
  },
}
</script>

<style lang="scss" scoped>
.form-content {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 60%;
}
</style>