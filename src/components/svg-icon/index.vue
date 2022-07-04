<template>
    <svg aria-hidden="true">
        <use  :xlink:href="symbolId" :fill="color"/>
    </svg>
</template>

<script setup lang="ts">
interface Props {
  prefix?: string
  name: string
  color?: string
}
const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  color: '#333'
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
// const props = defineProps<Props>({
//     // 显示的 svg 图标名称（剔除 icon-）
//     name: {
//         type: String,
//         required: true
//     },
//     // 直接指定 svg 图标的颜色
//     color: {
//         type: String
//     },
//     // 通过 tailwind 指定 svg 颜色的类名
//     fillClass: {
//         type: String
//     }
// })
// 真实显示的 svg 图标名（拼接 #icon-）
// const symbolId = computed(() => `#icon-${props.name}`)
</script>
<style scoped>
</style>