<template>
  <div class="login-bg">
    <div class="login">
      <div class="tit">登录</div>
      <input type="text" placeholder="账号">
      <input type="password" placeholder="密码">
      <button>登录</button>
      <span>没有账号？<a href="#">去注册</a> </span>
    </div>
  </div>
</template>

<script setup >
import { ref, reactive, toRefs, onMounted } from 'vue'

</script>
<style scoped lang="scss">
.login-bg {
  position: fixed;
  text-align: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 999;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  .login {
    /*相对定位*/
    position: relative;
    z-index: 1;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    /*垂直配列*/
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 500px;
    /*阴影*/
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);

    .tit {
      font-size: 26px;
      margin: 65px auto 70px auto;
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

    button {
      width: 280px;
      height: 40px;
      margin: 35px auto 40px auto;
      border: none;
      background: linear-gradient(-200deg, #fac0e7, #aac2ee);
      color: #fff;
      font-weight: bold;
      letter-spacing: 8px;
      border-radius: 10px;
      cursor: pointer;
      /*动画过渡*/
      transition: 0.5s;
    }

    button:hover {
      background: linear-gradient(-200deg, #aac2ee, #fac0e7);
      background-position-x: -280px;
    }
  }
}
</style>