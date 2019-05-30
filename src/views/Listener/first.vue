<template>
  <div>
    <p>first</p>
    <p>$listeners: {{$listeners}}</p>
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