<template>
  <div>
    <h2>first</h2>
    <second v-on="$listeners"></second>
  </div>
</template>

<script>
import second from "./second";
export default {
  components: {
    second
  }
};
</script>