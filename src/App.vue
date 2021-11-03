<!--
 * @Author: shan.zheng
 * @Date: 2021-10-30 15:30:58
 * @LastEditors: shan.zheng
 * @LastEditTime: 2021-11-03 16:09:06
 * @Description: 首页
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'
</script>

<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <Test msg="props-mag" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
