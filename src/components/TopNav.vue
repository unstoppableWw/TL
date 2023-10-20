<template>
  <div class="nav">
    <div class="logo">
      <img src="/logo.png" alt="">
    </div>
    <div class="list">
      <ul>
        <li  >
          <RouterLink to="/" :class="{ active: route.path ==='/' }">首页</RouterLink>
        </li>
        <li  >
          <RouterLink to="/tiku" :class="{ active: route.path === '/tiku' }">题库</RouterLink>
        </li>
        <li  >
          <RouterLink to="/sucai" :class="{ active: route.path === '/sucai' }">素材</RouterLink>
        </li>
        <li>
          <RouterLink to="/us" :class="{ active: route.path === '/us' }">关于我们</RouterLink>
        </li>
      </ul>
    </div>
    <div class="icon" @click="show" v-if="showicon">
      <img src="/avatar.jpg" alt="">
      <div class="menu" id="menu" v-if="isshow">
        <ul>
          <li>
            <div class="user">
              <svg t="1695626387044" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4011" width="32" height="32">
                <path
                  d="M512 563.2c-127.9744 0-230.4-115.2512-230.4-256s102.4256-256 230.4-256 230.4 115.2512 230.4 256-102.4256 256-230.4 256z m0-51.2c98.2528 0 179.2-91.0592 179.2-204.8s-80.9472-204.8-179.2-204.8-179.2 91.0592-179.2 204.8 80.9472 204.8 179.2 204.8zM128 793.6a179.2 179.2 0 0 1 179.3792-179.2h409.2416C815.6416 614.4 896 694.7328 896 793.6a179.2 179.2 0 0 1-179.3792 179.2H307.3792C208.3584 972.8 128 892.4672 128 793.6z m51.2 0c0 70.5792 57.4464 128 128.1792 128h409.2416A128 128 0 0 0 844.8 793.6c0-70.5792-57.4464-128-128.1792-128H307.3792A128 128 0 0 0 179.2 793.6z"
                  fill="#dee2ea" p-id="4012"></path>
              </svg>
              <span id="user-id">15570648997</span>
            </div>
          </li>
          <li>
            <div class="user">
              <svg t="1695627407637" class="icon" viewBox="0 0 1171 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="5184" width="32" height="32">
                <path
                  d="M1121.034 947.942c0 0-142.543-24.912-274.03-24.912-130.08 0-249.119 24.912-249.119 24.912-4.327 0-8.453-0.725-12.456-1.761-4.003 1.036-8.129 1.761-12.456 1.761 0 0-142.543-24.912-274.03-24.912-130.08 0-249.119 24.912-249.119 24.912-27.518 0-49.824-22.306-49.824-49.824L0 175.674c0 33.215 29.565-99.647 309.892-99.647 157.587 0 236.431 40.771 275.57 71.502 38.97-30.731 117.131-71.502 272.491-71.502 284.344 0 312.905 132.862 312.905 99.647l0 722.444C1170.858 925.636 1148.552 947.942 1121.034 947.942zM548.061 225.498c0 0-49.824-74.736-249.119-74.736-166.081 0-224.207 74.736-224.207 74.736l0 622.797c0 27.518 22.306 24.912 49.824 24.912 0 0 85.433-24.912 174.384-24.912 97.495 0 199.295 24.912 199.295 24.912 27.518 0 49.824 2.606 49.824-24.912L548.062 225.498zM1096.122 225.498c0 0-27.802-41.543-124.559-62.676l0 386.53-99.647-74.736-99.647 74.736L772.269 156.537c-109.032 17.411-149.471 68.961-149.471 68.961l0 622.797c0 27.518 22.306 24.912 49.824 24.912 0 0 85.433-24.912 174.383-24.912 97.495 0 199.295 24.912 199.295 24.912 27.518 0 49.824 2.606 49.824-24.912L1096.124 225.498zM423.502 673.911 199.295 673.911c-13.759 0-24.912-11.153-24.912-24.912l0-24.912c0-13.759 11.153-24.912 24.912-24.912l224.207 0c13.759 0 24.912 11.153 24.912 24.912L448.414 649C448.414 662.758 437.261 673.911 423.502 673.911zM423.502 449.705 199.295 449.705c-13.759 0-24.912-11.153-24.912-24.912l0-24.912c0-13.759 11.153-24.912 24.912-24.912l224.207 0c13.759 0 24.912 11.153 24.912 24.912l0 24.912C448.414 438.552 437.261 449.705 423.502 449.705z"
                  fill="#bfbfbf" p-id="5185"></path>
              </svg>
              <span id="user-id">我的课程</span>
            </div>
          </li>
          <li>
            <div class="user">
              <svg t="1695627508445" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="8216" width="32" height="32">
                <path
                  d="M829.44 882.688h-634.88c-28.672 0-53.248-24.576-53.248-53.248v-634.88c0-28.672 24.576-53.248 53.248-53.248h634.88c28.672 0 53.248 24.576 53.248 53.248v107.861333c0 11.605333-8.874667 20.48-20.48 20.48s-20.48-8.874667-20.48-20.48V194.56c0-6.144-6.144-12.288-12.288-12.288h-634.88c-6.144 0-12.288 6.144-12.288 12.288v634.88c0 6.144 6.144 12.288 12.288 12.288h634.88c6.144 0 12.288-6.144 12.288-12.288v-107.178667c0-11.605333 8.874667-20.48 20.48-20.48s20.48 8.874667 20.48 20.48v107.178667c0 28.672-24.576 53.248-53.248 53.248z"
                  fill="#cdcdcd" p-id="8217"></path>
                <path
                  d="M862.208 532.48H371.370667c-11.605333 0-20.48-8.874667-20.48-20.48s8.874667-20.48 20.48-20.48h490.837333c11.605333 0 20.48 8.874667 20.48 20.48s-8.874667 20.48-20.48 20.48z"
                  fill="#cdcdcd" p-id="8218"></path>
                <path
                  d="M862.208 532.48c-5.461333 0-10.24-2.048-14.336-6.144l-170.666667-170.666667c-8.192-8.192-8.192-21.162667 0-28.672 8.192-8.192 21.162667-8.192 28.672 0l170.666667 170.666667c8.192 8.192 8.192 21.162667 0 28.672-4.096 4.096-8.874667 6.144-14.336 6.144z"
                  fill="#cdcdcd" p-id="8219"></path>
                <path
                  d="M691.541333 703.146667c-5.461333 0-10.24-2.048-14.336-6.144-8.192-8.192-8.192-21.162667 0-28.672l170.666667-170.666667c8.192-8.192 21.162667-8.192 28.672 0 8.192 8.192 8.192 21.162667 0 28.672l-170.666667 170.666667c-4.096 4.096-8.874667 6.144-14.336 6.144z"
                  fill="#cdcdcd" p-id="8220"></path>
              </svg>
              <span id="user-id" @click="quit">退出登录</span>
            </div>
          </li>
        </ul>
        <div class="arrow"></div>
      </div>
    </div>
    <div class="login" @click="showlogin" v-if="!showicon">
      <p>登录</p>
    </div>
  </div>
  <div class="login-bg" v-if="isshowlogin" @click="close">
    <Login @click.stop v-model:isshowlogin="isshowlogin" v-model:showicon="showicon" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import Login from '@/components/Login.vue'
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route.path);
//展示头像下的菜单栏
const isshow = ref(false)
//显示登录或者头像
const showicon = ref(null)
//显示登录组件
const isshowlogin = ref(null)

const show = () => {
  if (!isshow.value) {
    isshow.value = !isshow.value
  }
}
const showlogin = () => {
  isshowlogin.value = true
}
const close = () => {
  if (isshowlogin.value) {
    isshowlogin.value = !isshowlogin.value;
  }
}

//退出登录
const quit = () => {
  localStorage.removeItem("token")
  showicon.value = false
}
// 监听整个文档的点击事件
onMounted(() => {
  //如果token不存在，就显示头像
  if (!localStorage.getItem('token')) {
    isshowlogin.value = true
    showicon.value = false
  } else {
    isshowlogin.value = false
    showicon.value = true
  }
  document.addEventListener('click', closeMenu)

})

// 处理点击事件，如果点击了菜单以外的区域，就关闭菜单
const closeMenu = (event) => {
  if (isshow.value && !event.target.closest('.icon')) {
    isshow.value = false
  }
}

// 在组件销毁时移除事件监听器，以防止内存泄漏
onUnmounted(() => {
  document.removeEventListener('click', closeMenu)
})

</script>

<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
  padding: 0 15%;
  background-color: #1d282d;

  .logo {
    img {
      width: 50px;
      height: 50px;
    }
  }

  .list {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      
      justify-content: space-around;



      li {
        width: 120px;
        line-height: 40px;
        text-align: center;

        .active {
          color: #4076ea;
        }

        a {
          color: white;
          text-decoration: none;
          font-size: 20px;
          font-weight: 600;
        }

      }
    }
  }

  .icon {
    position: relative;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50px;
    }

    .menu {
      position: absolute;
      min-width: 190px;
      height: 220px;
      top: 65px;
      right: 0;
      cursor: pointer;
      // z-index: 1;
      background: #fff;
      box-shadow: 0 2px 10px 0 rgba(47, 51, 56, .2);
      border-radius: 8px;
      padding: 0 20px 20px;

      .arrow {
        position: absolute;
        width: 24px;
        height: 10px;
        top: -10px;
        right: 8px;
        background-image: url(/user-arrow.png);
        background-repeat: no-repeat;
        background-size: contain;
      }

      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;

        li {

          .user {
            display: flex;
            align-items: center;
            margin: 20px 0;

            span {
              font-size: 18px;
              color: #636e92;
              margin-left: 10px;
            }
          }
        }
      }
    }


  }

  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 70px;
    font-size: 14px;
    // color: #3c7cfc;
    // margin-left: 15px;
    cursor: pointer;
    // border: 1px solid #3c7cfc;
    border-radius: 18px;
    font-weight: 600;
    background-color: white;

    p {
      color: #3c7cfc;
    }
  }
}

.login-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  /* 半透明黑色背景 */
  z-index: 1;
}
</style>
