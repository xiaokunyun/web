<template>
    <div>
       <Mobile v-if="isMobileTerminal" />
       <Pc v-else/>
    </div>
</template>

<script setup lang="ts">
import { isMobileTerminal } from '@/util/flex'
import { navList } from "@/api/list";
import Pc from "./pc.vue";
import Mobile from "./mobile.vue";
import axios from 'axios'
onMounted(()=>{
    GETvideosList()
})
interface IVideoItem {
  id: number;
  imgSrc: string;
  desc: string;
  playCount: string;
  commentCount: string;
  videoSrc: string;
}
const data=ref<IVideoItem[]>([])
async function GETvideosList() {
      const res = await navList()
      console.log("res",res);
}
</script>

<style lang="scss" scoped>
</style>