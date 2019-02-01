<template>
  <div>
    <el-table-column label="test" align="center">
      <template slot-scope="{row}">test</template>
    </el-table-column>
    <el-table-column label align="center">
      <template slot-scope="{row}"></template>
    </el-table-column>
  </div>
</template>

<script>
export default {};
</script>