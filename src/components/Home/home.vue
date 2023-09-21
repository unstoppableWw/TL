<template>
  <div class="home">
    <img class="top" src="https://www.tencent.com/img/banners/brief-1-1.jpg" alt="">
    <div class="content1">
      <div class="carousel">
        <el-carousel height="300px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small justify-center" text="2xl">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="announcement">
        <div class="title">
          <ul>
            <li>综合</li>
            <li>公告</li>
            <li>社区</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content2">

    </div>
  </div>
</template>

<script setup>

import { ElButton } from 'element-plus'
</script>

<style lang="scss" scoped>
.home {
  .top {
    width: 100%;
    height: 400px;
  }

  .content1 {
    margin: 20px auto;
    width: 77%;
    height: 100%;

    display: flex;

    .carousel {
      flex: 4;
      margin-right: 10px;
      background-color: pink;
      
    }

    .announcement {
      flex: 3;
      background-color: pink;
      .title{
        ul{
          width: 100%;
          display: flex;
          justify-content: space-around;
          background-color: blue;
          li{
            width: 70px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: red;
          }
        }
      }
    }
  }
  .content2{
    width: 77%;
    height: 300px;
    margin: 0 auto;
    background-color: pink;
  }
}
</style>