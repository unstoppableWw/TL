<template>
    <!-- 顶部导航 -->
    <div class="news_container">
        <!-- 主标题 -->
        <div class="title_div">{{ news_title }}</div>
        <!-- 副标题区域 -->
        <div class="subtitle">
            <div style="color: #4095E5;font-size: 14px;">{{ author }}</div>
            <div style="color: gray;font-size: 13px;margin-left: 2%;">{{ post_time }}</div>
            <div style="color: #303132;font-size: 14px;margin-left: 2%;">字体:</div>
            <!-- 字体大小设置 -->
            <div>
                <label style="font-size: 15px;color: #303132;">
                    <input type="radio" v-model="selectedOption" value="big">
                    大
                </label>
                <label style="font-size: 15px;color: #303132;">
                    <input type="radio" v-model="selectedOption" value="middle">
                    中
                </label>
                <label style="font-size: 15px;color: #303132;">
                    <input type="radio" v-model="selectedOption" value="small">
                    小
                </label>
            </div>
            <!-- 浏览与点赞数目 -->
            <div class="view_zan_div">
                <img src="" style="width: 20px;height: 20px;">
                <div style="font-size: small;color: #303132;margin-left: 2px;">{{ view_num }}</div>
                <img @click="dianzan" src="" v-show="isDianzan" style="width: 20px;height: 20px;margin-left: 20px;">
                <img @click="dianzan" src="" v-show="!isDianzan" style="width: 20px;height: 20px;margin-left: 20px;">
                <div style="font-size: small;color: #303132;margin-left: 2px;">{{ zan_num }}</div>
            </div>
        </div>
        <!-- 分界线 -->
        <div class="divider"></div>
        <div class="news_content" style="padding-top: 0;"
            :style="{ 'font-size': selectedOption === 'big' ? '16px' : selectedOption === 'middle' ? '14px' : '13px' }">
            <div v-html="news_content" class="neirong"></div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router"
import { ref, onMounted } from 'vue';
import { getNewsDetail } from '../request/api/news.js'
const route = useRoute()
const news_title = ref('')
const author = ref('天领新闻组')
const post_time = ref('')
const selectedOption = ref('big'); // 设置默认选中的选项为大号字体
const view_num = ref(648)
const isDianzan = ref(false)
const zan_num = ref(328)
const news_content = ref("")

// 点赞/取消点赞
const dianzan = () => {
    if (isDianzan.value) {
        zan_num.value--
    }
    else {
        zan_num.value++
    }
    isDianzan.value = !isDianzan.value
};
onMounted(async () => {
    let res = await getNewsDetail(route.params.bookId)
    news_content.value = res.data.data.content
    news_title.value = res.data.data.title
    let time = res.data.data.publishDateTime
    const dateObject = new Date(time);

    // 获取日期部分（年、月、日）
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，因此要加1
    const day = dateObject.getDate().toString().padStart(2, '0');
    post_time.value=`${year}-${month}-${day}`
})



</script>

<style>
pre {
    white-space: pre-wrap;
    word-wrap: break-word;
}

body {
    background-color: #ebebeb;
}

.news_container {
    width: 70%;
    height: auto;
    margin: 0 auto;
    /* background-color: white;

    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);

    
    /* margin-top: 2%;
    margin-bottom: 2%; */
    /* padding-top: 100px; */
    /* border-radius: 2px; */
    /* display: flex; */
    /* flex-direction: column; */
}

.title_div {

    padding-left: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: bold;
    color: #303132;
    padding-top: 100px;
}

.subtitle {
    width: 100%;
    margin-top: 2%;
    padding-left: 28px;
    display: flex;
    align-items: center;
    flex-direction: row;

}

.divider {
    width: 94%;
    margin-left: 3%;
    border: solid 1px lightgray;
    border-bottom: 0;
    margin-top: 2%;
}

.news_content {
    width: 100%;
    height: auto;
    padding: 48px;
    text-align: justify;
    line-height: 2;
}
.neirong{
    word-wrap: break-word;
}
.view_zan_div {
    display: flex;
    align-items: center;
    justify-content: right;
    padding-right: 48px;
    flex-grow: 1;
}
</style>