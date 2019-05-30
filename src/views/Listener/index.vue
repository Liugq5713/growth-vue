<template>
  <div>
    <p>父组件</p>
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