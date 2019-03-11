<template>
  <div>
    <el-card class='box-card'>
       当v-for渲染的内容是异步获取的时候，
       那么你想要获取到v-for里面的DOM元素，
       就需要等他渲染完成
       这里和mounted没什么关系
    </el-card>
    <div v-for="item in res" :key="item">
      <div class="test">{{item}}</div>
      <div class="content" v-html="content"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      res: [],
      content: null
    };
  },
  created() {
    setTimeout(() => {
      this.content = "<p>这里是v-html的内容</p>";
      this.res=["name", "age"]
    }, 1000);
  },
  mounted() {
    const test_ele = document.querySelector(".content");
    console.log("test_ele", test_ele);
  }
};
</script>