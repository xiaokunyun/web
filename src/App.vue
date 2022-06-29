<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
const path = ref([
  { name: "home" },
  { name: "text" },
  { name: "web" },
])
</script>

<template>
  <div class="header">
    <div class="left">welcome</div>
    <div class="right">
      <div v-for="(item, index) in path" :key="index">
       {{ item.name }}
      </div>
    </div>
  </div>
  <div class="card">
    <h1>TiKi Platinum</h1>
    <h2>6228 8076 2232 8768</h2>
    <h3>van conf banck</h3>
    <h4>6 / 24</h4>
  </div>
  <div class="circle"></div>
  <div class="rect"></div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  height: 100vh;
  background: radial-gradient(circle at 60% 90%,
      rgb(197, 68, 240),
      transparent 60%),
    radial-gradient(circle at 20px 20px,
      rgba(218, 10, 10, 0.8),
      transparent 25%),
    #182336;
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-weight: 700;

  .left {
    padding: 0 20px 0 20px;
    width: 20%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right {
    padding: 0 20px 0 20px;
    width: 70%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      padding: 0 20px 0 20px;
      width: 100px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div:hover {
      border-radius: 5px;
      border: 2px solid rgba(255, 255, 255, 0.4);
    }
  }


}

.card {
  color: rgba(255, 255, 255, 0.8);
  position: absolute;
  right: 300px;
  bottom: 200px;
  font-family: sans-serif;
  text-align: center;
  width: 300px;
  height: 500px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  background: linear-gradient(to top right,
      rgba(90, 149, 207, 0.5),
      rgba(58, 76, 99, 0.8));
  box-shadow: 10px -10px 20px rgba(0, 0, 0, 0.2), -10px 10px 20px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  /*  元素后面区域添加模糊效果 */
  border-radius: 20px;
  transform: rotate(-10deg);
}

.rect {
  width: 160px;
  height: 160px;
  position: absolute;
  right: 110px;
  bottom: 520px;
  background: linear-gradient(to top left,
      rgba(135, 116, 249, 0.9),
      rgba(75, 162, 237, 0.9));
  border-radius: 50%;
}
</style>
