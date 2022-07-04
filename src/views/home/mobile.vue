<template>
    <div class="bg-white static top-0 left-0 z-10">
        <ul class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden">
             <!-- 汉堡按钮 -->
            <li class="fixed top-0 right-0 h-4 px-1 flex items-center bg-white z-20 shadow-l-white">
                <SvgIcon class="w-1.5 h-1.5" name="hamburger" />
            </li>
            <!-- 滑块 -->
            <li class="absolute h-[22px] bg-zinc-900 dark:bg-zinc-800 rounded-lg duration-200" :style="sliderStyle">
            </li>
            <li v-for="item in data" :key="item.id" class="flex-shrink-0 px-1.5 py-0.5 z-10 duration-200 last:m-4">
                {{ item.text }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import SvgIcon from "../../components/svg-icon/index.vue";
interface INavItem {
    id: string
    text: string
}
const props = defineProps({
    data: {
        type: Array<INavItem>,
        required: true
    }
})
console.log("props.data", props.data)
// 滑块
const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '52px'
})

</script>

<style lang="scss" scoped>
</style>