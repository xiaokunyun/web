<template>
    <div>
       <Mobile v-if="isMobileTerminal" :data="data" />
       <Pc  :data="data" v-else/>
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
interface INavItem {
  id: string
  text: string
}
const data=ref<INavItem[]>([])
async function GETvideosList() {
      const res = await navList()
      data.value=res.data.result
      console.log("res",res);
      console.log("data.value",data.value);

}
</script>

<style lang="scss" scoped>
</style>