<template>
  <div class="tiku">
    <div class="content">
      <div class="select">
        <ul>
          <li v-for="(category, categoryKey) in selectLists.form" :key="categoryKey" @click="selectCategory(categoryKey);changeform()"
            :class="{ active: categoryKey == selectedCategory }" >
            {{ categoryKey }}
          </li>
        </ul>
        <ul v-if="selectedCategory">
          <li v-for="item in selectLists.form[selectedCategory]" :key="item" @click="selectItem(item);changeform()"
            :class="{ active: item == selectedItem }">
            {{ item }}
          </li>
        </ul>
        <ul>
          <li v-for="item in selectLists.city" :key="item" @click="selectCity(item);changeform()"
            :class="{ active: item == selectedCity }">
            {{ item }}
          </li>
        </ul>
      </div>
      <p>共{{items.length}}套</p>
      <div class="paper">
        <div class="paper-item" v-for="item in items" @click="goToDetail(item)">
          <div class="paper-left">
            <h2>{{ item.year + item.bookName }}</h2>
            <h3>浏览量：44</h3>
          </div>
          <span>详解</span>
        </div>
      </div>
      <div class="paper-bottom">
          <el-pagination background layout="prev, pager, next" :total="Number(total)" :current-page="Number(page)" @current-change="handlePageChange">
          </el-pagination>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { getBooks } from '@/request/api/tiku';
import { useRouter } from 'vue-router';
const router = useRouter();
const selectLists = reactive({
  form: {
    "结构化": ["不限", "人际关系", "组织管理", "应急处理", "综合分析", "套题"],
    "无领导": ["不限", "多项选择", "选择排序", "排列", "开放题"],
  },
  city: ["不限", "北京市", "天津市", "上海市", "重庆市", "河北省", "山西省", "辽宁省", "吉林省", "黑龙江省", '江苏省', "浙江省", "安徽省", '福建省', '江西省', "山东省", '河南省', '湖北省', '湖南省', "广东省", "海南省", "四川省", '贵州省', "云南省", '陕西省', '甘肃省', "青海省", "台湾省", "内蒙古自治区", "广西壮族自治区", "西藏自治区", "宁夏回族自治区", "新疆维吾尔自治区", "香港特别行政区", "澳门特别行政区"],
});

const selectedCategory = ref("结构化");
const selectedItem = ref("不限");
const selectedCity = ref("不限");

const selectCategory = (category) => {
  selectedCategory.value = category;
  selectedItem.value = "不限"; // Reset sub-item selection

};

const selectItem = (item) => {
  selectedItem.value = item;
  
  // Perform any actions or filtering based on the selected item
};
const selectCity = (item) => {
  selectedCity.value = item;
  
  // Perform any actions or filtering based on the selected item
};
const items = ref("")
const changeform = async()=> {
  let res=await getBooks(selectedCategory.value=="不限"?"":selectedCategory.value,selectedCity.value=="不限"?"":selectedCity.value,"1")
  items.value=res.data.data.records;
  total.value=res.data.data.total;
  page.value='1'
 
}
const goToDetail = (item) => {
  console.log(item);
  // 使用路由导航跳转到详情页，并传递 item 的信息作为参数
  router.push({
    name: 'questiondetail',
    params: { bookId: item.bookId }, // 替换成实际的参数字段和值
  });
};

const total=ref("")
const page = ref("1")
const handlePageChange = async(newPage)=>{
  let res = await getBooks(selectedCategory.value=="不限"?"":selectedCategory.value,selectedCity.value=="不限"?"":selectedCity.value,newPage)
  items.value = res.data.data.records;
}
onMounted(async () => {
  let res = await getBooks("", "",page.value)
  console.log(res.data);
  total.value=res.data.data.total
  items.value = res.data.data.records;

})
</script>
<style scoped lang="scss">
.tiku {
  
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
      padding: 10px 0;
    }
  }
}</style>