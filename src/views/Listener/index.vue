<template>
  <div>
    <h2>父组件</h2>
    <first @some="some"/>
  </div>
</template>

<script>
import first from "./first";
export default {
  components: {
    first
  },
  methods: {
    some() {
      console.log("hi");
      this.$message.success("父组件传入的事件");
    }
  }
};
</script>