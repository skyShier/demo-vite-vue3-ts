/*
 * @Author: shan.zheng
 * @Date: 2021-10-30 15:30:58
 * @LastEditors: shan.zheng
 * @LastEditTime: 2021-11-04 09:57:44
 * @Description: eslint配置
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true // 使 defineProps, defineEmits defineExopse defineDefaults 不定义可用
  },
  extends: [
    // 'plugin:vue/essential',
    // 'standard'
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
  }
}
