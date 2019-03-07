<template>
  <div>
    <el-button size="mini" type="primary" @click="add">添加</el-button>
    {{test}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        child: [{}]
      }
    };
  },
  watch: {
    obj(val) {
      console.log("val", val);
    }
  },
  computed: {
    test() {
      return this.obj;
    }
  },
  methods: {
    add() {
      this.obj.child.push({ name: "liu" });
    }
  }
};
</script>