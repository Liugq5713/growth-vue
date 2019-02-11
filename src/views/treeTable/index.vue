<template>
  <div>
    <tableColumn :data="data" :columns="columns">
      <template slot="__opt" slot-scope="scope">
        <el-button size="mini" type="danger" @click="test(scope)">点我</el-button>
      </template>
    </tableColumn>
  </div>
</template>

<script>
const columns = [
  { label: "", key: "__spread", width: "200" },
  { label: "ID", key: "id" },
  { label: "事件", key: "event" },
  { label: "时间线", key: "timeLine" },
  { label: "操作", key: "__opt" }
];

import data from "./data.js";

import tableColumn from "./tableColumn";
export default {
  components: {
    tableColumn
  },
  data() {
    return {
      columns,
      data
    };
  },
  methods: {
    test(scope) {
      this.$message.success(`${scope.scope.row.event}，来啦老弟`);
    }
  }
};
</script>