<template>
  <div>
    <h3>数字</h3>
    <div v-for="item in  test_num" :key="item">{{item}}</div>
    <h3>字符串</h3>
    <div v-for="item in  test_str" :key="item">{{item}}</div>
    <div>
      <el-card class="box-card">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      res: [],
      test_num: 5,
      test_str: "hello",
      content: null
    };
  },
  created() {
    setTimeout(() => {
      this.content = "<p>这里是v-html的内容</p>";
      this.res = ["name", "age"];
    }, 1000);
  },
  mounted() {
    const test_ele = document.querySelector(".content");
    console.log("test_ele", test_ele);
  }
};
</script>