<template>
  <div>
    <JsonForm v-model="formModel" :formConfig='formConfig'/>
    {{formModel}}
  </div>
</template>

<script>
import formConfig from './config.js'
import JsonForm from './components/JsonForm'
export default {
  components: { JsonForm },
  data() {
    return {
      formConfig,
      formModel: {}
    }
  }
}
</script>
