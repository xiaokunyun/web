<template>
    <div class="h-full w-full relative">
        <div class="absolute right-60 bottom-52 w-80 h-96 text-blue-300 text-center shadow ">
            <h1>TiKi Platinum</h1>
            <h2>6228 8076 2232 8768</h2>
            <h3>van conf banck</h3>
            <h4>{{ year }}</h4>
            <h4>{{ date }}</h4>
            <h4>{{ time }}</h4>
        </div>
        <div class="circle"></div>
        <div class="rect"></div>
    </div>
</template>
<script setup lang="ts">
import dayjs from 'dayjs'
onMounted(() => {
  Date1()
})
const year = ref(dayjs(new Date()).format('YYYY/MM-DD'))
const date = ref(dayjs(new Date()).format('MM/DD'))
const time = ref(dayjs(new Date()).format('hh:mm:ss'))
function Date1() {
  setInterval(Date2, 1000); //在1秒后再次执行
}
function Date2() {
  year.value = dayjs(new Date()).format('YYYY/MM-DD')
  date.value = dayjs(new Date()).format('MM/DD')
  time.value = dayjs(new Date()).format('hh:mm:ss')
}
</script>

<style scoped>
</style>