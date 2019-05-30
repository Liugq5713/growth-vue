<template>
  <div>
    <p>second</p>
    <p>$listeners: {{$listeners}}</p>
    <third v-on="$listeners"/>
  </div>
</template>

<script>
import third from "./third";
export default {
  components: {
    third
  }
};
</script>