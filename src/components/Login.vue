<template>
  <div class="login">
      <div class="tit">登录/注册</div>
      <input type="text" v-model="gettext" :placeholder="platext">
      <input type="password" v-model="getps"  :placeholder="plapassword" >
      <span :class="{showvcode: selectloginform}">获取验证码</span>
      <button @click="login">登录</button>
      <span v-if="!selectloginform" @click="changeform">验证码登录/注册</span>
      <span v-if="selectloginform" @click="changeform">账号密码登录</span>
      <label class="radio-container">
        <input type="checkbox" name="xieyi" class="custom-checkbox">
        <span class="radiomark">我已阅读并同意<a>《用户协议》</a>和<a>《隐私政策》</a></span>
      </label>
    </div>
</template>

<script setup >
import { ref, reactive, toRefs, onMounted } from 'vue'

import { password_Login } from '@/request/api/home'
const props = defineProps(['isshowlogin',"showicon"])
const emit = defineEmits(['update:isshowlogin','update:showicon'])

const selectloginform=ref(true)
const platext = ref('账号')
const plapassword = ref('密码')


const gettext=ref("")
const getps=ref("")
const changeform=()=>{
  selectloginform.value=!selectloginform.value
  if(!selectloginform.value){
    platext.value="手机号"
    plapassword.value="验证码"
  }else{
    platext.value="账号"
    plapassword.value="密码"
  }
}

const login=async ()=>{
  //把账号密码存储到Pinia库中
  let {data}=await password_Login(gettext.value,getps.value);
  localStorage.setItem("token", data.data.token);
  // store.getToken(localStorage.getItem("token"))
  // console.log(store.token);
  // console.log(props.isshowlogin);
  // store.userid=gettext
  // store.password=getps
  emit('update:isshowlogin', false)
  emit('update:showicon', true)
  
  // console.log(props);
  
}
</script>
<style scoped lang="scss">
  .login {
    /*相对定位*/
    top: 50%;
    left: 50%;
    position: fixed;
    z-index: 999;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    /*垂直配列*/
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 450px;
    /*阴影*/
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    transform: translate(-50%, -50%);
    .tit {
      color: #6190e8;
      font-size: 26px;
      margin-bottom: 20px;
      // margin: 65px auto 70px auto;
    }

    input {
      width: 280px;
      height: 30px;
      text-indent: 8px;
      border: none;
      border-bottom: 1px solid #ddd;
      outline: none;
      margin: 12px auto;
    }
    .showvcode{
      visibility:hidden
    }
    button {
      width: 280px;
      height: 40px;
      margin: 35px auto 40px auto;
      border: none;
      background: linear-gradient(-200deg, #6190e8, #a7bfe8);
      color: #fff;
      font-weight: bold;
      letter-spacing: 8px;
      border-radius: 10px;
      cursor: pointer;
      /*动画过渡*/
      transition: 0.5s;
      box-shadow: 0 10px 20px 0 rgba(60, 124, 252, .2);
    }

    button:hover {
      background: linear-gradient(-200deg, #ff626e, #ffbe71);
      background-position-x: -280px;
    }

    span {
      color: #3c7cfc;
      cursor: pointer;
    }

    .radio-container {
      width: 400px;
      display: flex;
      justify-content: center;
      align-items: center;

      .custom-checkbox {
        width: 13px;
        height: 13px;
        margin: 20px 5px;
        background-color: #3c7cfc;
      }

      span {
        color: #aeb6c2;
        font-size: 12px;

        a {
          color: #7fcdff;
        }
      }
    }

  }
</style>