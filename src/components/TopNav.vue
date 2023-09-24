<template>
  <div class="nav">
    <div class="logo">1111</div>
    <div class="list">
      <ul>
          <li>
          <RouterLink to="/">首页</RouterLink>
          </li>
          <li>
          <RouterLink to="/tiku">题库</RouterLink>
          </li>
          <li><a href="#">服务介绍</a></li>
          <li><a href="#">关于我们</a></li>
          <li><a href="#">联系我们</a></li>
        <div class="slider"></div>
      </ul>
      <svg t="1695029070571" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="5663" width="32" height="32">
        <path
          d="M452 822C247.98 822 82 656.02 82 452S247.98 82 452 82s370 165.98 370 370-165.98 370-370 370z m0-680c-170.94 0-310 139.06-310 310s139.06 310 310 310 310-139.06 310-310-139.06-310-310-310z"
          p-id="5664" fill="#ffffff"></path>
        <path
          d="M912 942c-7.68 0-15.35-2.93-21.21-8.79L678.82 721.24c-11.72-11.72-11.72-30.7 0-42.42s30.7-11.72 42.42 0l211.97 211.97c11.72 11.72 11.72 30.7 0 42.42A29.893 29.893 0 0 1 912 942z"
          p-id="5665" fill="#ffffff"></path>
      </svg>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
  position: absolute;
  padding-left: 200px;
  // z-index: 999;
  // background-color: #1d282d;

  .logo {
    width: 50px;
    height: 50px;
    background: red;
  }

  .list {
    width: 700px;
    display: flex;
    align-items: center;

    ul {
      display: flex;
      position: relative;
      justify-content: space-around;

      li {
        list-style: none;
        width: 120px;
        line-height: 40px;
        text-align: center;
        z-index: 1;

        a {
          color: white;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
        }

        &:hover~.slider {
          left: 10px;
        }

        &:nth-child(2):hover~.slider {
          left: 132px;
        }

        &:nth-child(3):hover~.slider {
          left: 255px;
        }

        &:nth-child(4):hover~.slider {
          left: 382px;
        }

        &:nth-child(5):hover~.slider {
          left: 505px;
        }
      }

      .slider {
        width: 100px;
        height: 40px;
        background-color: #0088f77a;
        border-radius: 4px;
        position: absolute;
        left: 10px;
        // bottom: 0;
        // z-index: 0;
        transition: all ease 0.4s;
        // animation: waves 2s ease-in-out infinite;
      }

      @keyframes waves {
        from {
          clip-path: polygon(0% 17%, 9% 10%, 18% 4%, 30% 0%, 43% 1%, 49% 4%, 57% 7%, 66% 10%, 78% 11%, 89% 11%, 96% 9%, 100% 7%, 100% 100%, 0% 100%);
        }

        50% {
          clip-path: polygon(0% 4%, 6% 9%, 13% 13%, 23% 15%, 31% 16%, 42% 15%, 49% 13%, 61% 10%, 71% 5%, 81% 3%, 90% 2%, 100% 5%, 100% 100%, 0% 100%);
        }

        to {
          clip-path: polygon(0% 17%, 9% 10%, 18% 4%, 30% 0%, 43% 1%, 49% 4%, 57% 7%, 66% 10%, 78% 11%, 89% 11%, 96% 9%, 100% 7%, 100% 100%, 0% 100%);
        }
      }
    }
  }




}
</style>
