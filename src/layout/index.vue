<template>
  <div class=" relative h-screenl w-full from-green-400 to-blue-500">
    <!-- 头部区域 -->
    <div class=" w-screen flex justify-center items-center text-black">
      <div class="w-4/5 flex justify-center items-center">
        <div class="w-1/5" v-for="(item, index) in list" :key="index">
          <span class="hover:text-dark-50">
            <router-link :to="item.path" class="a">    
            
            
            {{ item.meta.title }}</router-link>
          </span>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="w-full h-full text-light-200" >
      <!-- <home /> -->
      <!-- <RouterView /> -->
      <!-- <router-view v-slot="{ Component,route }">
        <transition>
          <keep-alive :include="list">
            <component :is="Component" :key="route.fullPath"/>
          </keep-alive>
        </transition>
      </router-view> -->
    </div>
  </div>
</template>
<script setup lang="ts">
// import home from "@/views/home/index.vue";
// import { routes } from "@/router";
const router=useRouter()
const list=ref(router.getRoutes().filter(v=>v.meta.requiresAuth))
</script>



