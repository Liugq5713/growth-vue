<template>
  <el-input  v-bind="$attrs"  @change="handleChange" v-model.trim='formValue'></el-input>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      formValue: this.value
    }
  },
  watch: {
    value(val) {
      this.formValue = val
    }
  },
  methods: {
    handleChange(val) {
      this.$emit('input', val)
    }
  }
}
</script>
