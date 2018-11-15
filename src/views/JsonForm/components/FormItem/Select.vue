<template>
    <el-select v-bind="$attrs" v-model='formValue' clearable placeholder='请选择' @change="handleChange">
      <el-option v-for='item in options' :key='item.value' :label='item.label' :value='item.value'>
      </el-option>
    </el-select>
</template>

<script>
export default {
  props: ['value', 'props'],
  data() {
    return {
      formValue: this.value,
      options: this.props.options
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
