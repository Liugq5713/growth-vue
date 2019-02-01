<template>
  <el-table :data="res" border style="width: 100%">
    <el-table-column :label="item.label" v-for="item in column" :key="item.key" align="center">
      <template slot-scope="scope">
        <i class="el-icon-plus"/>
        <i class="el-icon-minus"/>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import data from "./data.js";
import formatData from "./index.js";

const column = [{ label: "ID", key: "id" }, { label: "事件", key: "event" }];
export default {
  name: "tree-table",
  data() {
    return {
      column,
      data,
      res: {},
      linkArr: []
    };
  },
  created() {
    this.res = this.formatData(this.data);
    console.log("this.res", this.res);
  },
  methods: {
    formatData
  }
};
</script>