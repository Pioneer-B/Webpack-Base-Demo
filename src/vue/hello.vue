<template>
  <div class="hello-cls">
    {{ title }}
  </div>
</template>
<script setup>
import { ref } from "vue";
const title = ref("我是vue~");
</script>
<style lang="less" scoped>
.hello-cls {
  color: aqua;
}
</style>
