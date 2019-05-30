<template>
  <div>
    <h2>third</h2>
    <!-- <p>$listeners: {{$listeners}}</p> -->
    <el-button size="mini" @click="test" v-on="$listeners" type="primary">我是老三</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      this.$emit("some");
    }
  }
};
</script>