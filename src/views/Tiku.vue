<template>
  <div class="tiku">
    <div class="content">
      <div class="select">
        <ul>
          <li v-for="item in formlist" :key="item" :class="{ active: item == activeform }" @click="changeform(item)">{{
            item }}
          </li>
        </ul>
        <ul>
          <li v-for="item in citylist" :key="item" :class="{ active: item == activecity }" @click="changecity(item)">{{
            item }}
          </li>
        </ul>
      </div>
      <p>共100套</p>
      <div class="paper">
        <div class="paper-item" v-for="item in 10">
          <div class="paper-left">
            <h2>2023年北京市《无领导》面试题</h2>
            <h3>难度：44</h3>
          </div>
          <span>详解</span>
        </div>
      </div>
      <div class="paper-bottom">
        <el-pagination background layout="prev, pager, next" :total="30">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script setup >
import { ref, reactive, toRefs, onMounted } from 'vue'
import TopNav from '@/components/TopNav.vue'
import Bottom from '@/components/Bottom.vue'
const citylist = ref(["北京市", "天津市", "上海市", "重庆市", "河北省", "山西省", "辽宁省", "吉林省", "黑龙江省", '江苏省', "浙江省", "安徽省", '福建省', '江西省', "山东省", '河南省', '湖北省', '湖南省', "广东省", "海南省", "四川省", '贵州省', "云南省", '陕西省', '甘肃省', "青海省", "台湾省", "内蒙古自治区", "广西壮族自治区", "西藏自治区", "宁夏回族自治区", "新疆维吾尔自治区", "香港特别行政区", "澳门特别行政区"])
const formlist = ref(["无领导", "结构化", "半结构化", "面谈"])
const activecity = ref('北京市')
const activeform = ref('无领导')
const changecity = function (item) {
  activecity.value = item
}
const changeform = function (item) {
  activeform.value = item
}
</script>
<style scoped lang="scss">
.tiku {
  padding-top: 70px;
  width: 100%;
  height: 100%;
  background-color: #f5f7fa;

  .content {
    width: 70%;
    height: 100%;
    margin: 0 auto;

    p {
      margin: 10px 0 10px 20px;
      color: #bdc2d1;
    }

    .select {
      margin-top: 20px;
      width: 100%;
      background-color: #fff;
      padding: 10px 10px;
      display: flex;
      // align-items: center;
      flex-direction: column;

      .active {
        background-color: #3c7cfc;
        box-shadow: 0 4px 8px 0 rgba(50, 118, 248, .2);
        color: #fff;
      }

      ul {
        display: flex;
        flex-wrap: wrap;

        li {
          cursor: pointer;
          display: inline-block;
          background: #fff;
          height: 30px;
          line-height: 30px;
          padding: 0 10px;
          border-radius: 6px;
          margin-right: 12px;
          margin-bottom: 10px;
          font-size: 14px;
          color: #999ea2;
          justify-content: flex-start;
        }


      }
    }

    .paper {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      position: relative;
      background-color: #fff;
      flex-direction: column;

      .paper-item {
        padding: 0 20px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 18px;
        padding-bottom: 15px;
        border-bottom: 1px solid #f1f1f2;

        .paper-left {
          h2 {
            font-size: 14px;
            color: #3c464f;
            font-weight: 600;
            margin-bottom: 18px;
          }

          h3 {
            color: #8a9095;
            font-size: 12px;
            margin-bottom: 10px;

          }
        }

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          color: #ff8700;
          letter-spacing: 0;
          text-align: center;
          line-height: 16px;
          width: 70px;
          height: 28px;
          background-color: #fff5eb;
          border-radius: 28px;
        }
      }

      .paper-item:hover {
        background-color: #fff;
        box-shadow: 0 6px 18px 0 rgba(60, 70, 79, .1);
        border-radius: 4px;
      }
    }

    .paper-bottom {
      display: flex;
      justify-content: center;
      margin: 20px 0;
    }
  }
}
</style>