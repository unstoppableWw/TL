import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userid = ref('')
  const userpassword = ref('')
  // const getuserid = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  const getUserInfo =(userid,password)=> {
    userid.value=userid
    userpassword.value=password
  }

  return { userid, userpassword, getUserInfo }
})
