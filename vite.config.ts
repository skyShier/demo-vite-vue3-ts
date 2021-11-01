/*
 * @Author: shan.zheng
 * @Date: 2021-10-27 14:56:26
 * @LastEditors: shan.zheng
 * @LastEditTime: 2021-10-31 22:51:47
 * @Description: vite项目配置
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import eslintPlugin from  'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
    // eslintPlugin({
    //   // 配置选项
    //   cache: false, // 禁用eslint缓存
    //   fix: false // 插件验证，建议关闭
    // })
  ]
})
