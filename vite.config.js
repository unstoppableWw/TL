import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from 'postcss-pxtorem'
import autoprefixer from 'autoprefixer'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: { // 关键代码
        plugins: [
            postCssPxToRem({ // 自适应，px>rem转换
                rootValue: 16, // 1rem的大小
                propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
            }),
        ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    host:'0.0.0.0'
  }
})



