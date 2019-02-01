<template>
  <div id="app">
    <div id="nav" class="navbar">
      <el-col :span="4">
        <el-menu
          default-active="0"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          class="el-menu-vertical-demo"
        >
          <el-menu-item v-for="(route,idx) in router" :key="route.path" :index="String(idx)">
            <router-link :to="route.path" class="link">{{route.name}}</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view/>
      </el-col>
    </div>
  </div>
</template>
<script>
import './app.css'
export default {
  data() {
    return {
      router: this.$router.options.routes
    };
  }
};
</script>
<style>

#app{
  margin:0;
  padding:0;
}
.link {
  text-decoration: none;
  color: #ffff;
}

.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
}
</style>
