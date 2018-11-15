<template>
  <div>
      <el-form :model="formModel">
        <el-form-item
          v-for="(input, i) in formItems"
          :key="input.key + '_' + i"
          :label="input.title"
        >
        <component v-handleForm='input.beforeInserted' :props='input.props' v-bind="input.attrs" v-model="formModel[input.key]" :is='input.component' />
      </el-form-item>
  </el-form>
  <ul>
    <li v-for="config in formConfig" :key='config.key'>
      <el-tag type='info' >{{config}}</el-tag>
    </li>
  </ul>
  </div>
</template>

<script>
import Input from './FormItem/Input'
import Select from './FormItem/Select'
export default {
  components: {
    /* eslint-disable */
    Input,
    Select
  },
  props: ['value', 'formConfig'],
  data() {
    return {
      formModel: this.value,
      formItems: this.formConfig
    }
  },
  watch: {
    formConfig(val) {
      this.formItems = val
    }
  },
  directives: {
    handleForm: {
      // 指令的定义
      inserted(el, binding) {
        if (binding.value) {
          const isShow = binding.value()
        }
        console.log('binding', binding)
        el.focus()
      },
      update() {}
    }
  }
}
</script>
