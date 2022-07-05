<template>
  <div class="h-full w-full relative">
    <!-- 头部区域 -->
  <Head />
  
  <!--  -->
  <div class="w-full text-light-200">
  <RouterView/>
  </div>
  </div>
</template>

<script setup lang="ts">
import Head from "./components/head/index.vue";
</script>

