import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const Login_token = defineStore('user', () => {
  const token = ref('')

  // const getuserid = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  const getToken =(token)=> {
    token.value=token
  }
  return { token, getToken }
})
