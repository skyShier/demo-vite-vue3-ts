<!--
 * @Author: shan.zheng
 * @Date: 2021-11-03 14:41:16
 * @LastEditors: shan.zheng
 * @LastEditTime: 2021-11-03 15:39:19
 * @Description: 测试页面
-->
<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  msg: {
    type: String,
    default: ''
  }
})

const msg = 'data-msg'

const emit = defineEmits(['increment'])

const count = ref(0)
const increment = () => {
  console.log(props.msg)
  count.value++
  emit('increment')
}
</script>

<template>
  <h2>count: {{ count }}</h2>
  <p> {{ msg }}</p>
  <p> {{ props.msg }}</p>
  <button
    type="button"
    @click="increment"
  >
    测试按钮
  </button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
