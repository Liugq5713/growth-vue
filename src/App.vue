<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/jsonform">jsonform</router-link>
    </div>
    <div v-for="tag in tags" :key="tag.comment">
      {{tag}}
    </div>
    <router-view/>
  </div>
</template>
<script>
import data from '../data.json'
export default {
  data() {
    return {
      tags: data
    }
  },
  created() {}
}
</script>

<style>
</style>
