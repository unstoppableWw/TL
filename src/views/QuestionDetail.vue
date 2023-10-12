<template>
    <div class="outside_container">
        <!-- 试题内容 -->
        <div class="show_content" style="padding-top: 0;">
            <div class="title">
                <RouterLink to="/tiku" class="back">
                    返回
                </RouterLink>
                <div class="sticky_inner_div_middle">
                    <h2 class="title_h2">{{ title }}</h2>
                </div>
            </div>
            <!-- pre能够保留文本的空格换行等格式 -->
            <pre>{{ content }}</pre>
        </div>
    </div>
    <div style="position: sticky;bottom: 0;" class="questiondetail_bottom">
        <!-- 解析卡 -->
        <div class="answer_card_top" @click="toggleAnswer">
            {{ buttonText }}
        </div>
        <!-- 这一块存粹是为了模拟粉笔答题卡效果而堆砌的div -->
        <div class="blank_div">
            <div style="width: 100px;border-left: solid 1px lightgray;"></div>
            <div class="expand_div">
                <div @click="expand_answerCard" v-show="showAnswer">{{ expandText }}</div>
            </div>
        </div>
        <div class="answer_card_content" style="padding-top: 0;" v-show="showAnswer"
            :style="{ 'height': expandAnswer ? '620px' : '300px' }">
            <pre>{{ answer }}</pre>
        </div>
    </div>
</template>
<script setup>
import { useRoute } from "vue-router"
import { ref,onMounted } from 'vue';
import { getBookDetail,getAnsDetail } from '@/request/api/tiku'
const title = ref('')
const showAnswer = ref(false);
const expandAnswer = ref(false);
const buttonText = ref('分析参考');
const expandText = ref('拉长⬆');
const route = useRoute()
const content = ref("")
const answer = ref("")
onMounted(async()=>{
    let ques=await getBookDetail(route.params.bookId)
    let quesdata=ques.data.data
    title.value=quesdata.year+quesdata.bookName
    content.value=quesdata.content

    let ans=await getAnsDetail(route.params.bookId)
    let ansdata=ans.data.data
    answer.value=ansdata
})




// 显示/取消显示解析
const toggleAnswer = () => {
    showAnswer.value = !showAnswer.value;
    buttonText.value = showAnswer.value ? '收起' : '分析参考';
};
// 拓展显示/取消显示解析
const expand_answerCard = () => {
    expandAnswer.value = !expandAnswer.value;
    expandText.value = expandAnswer.value ? '收缩⬇' : '拉长⬆';
};
</script>
<style>
body {
    background-color: #ebebeb;
}
.questiondetail_bottom{
    margin-bottom: 20px;
}
.title{
    display: flex;
    font-size: 24px;
}
.title_h2{
    font-size: 24px;
}
.sticky_inner_div_middle{
    flex: 1;
}
.outside_container {
    padding-top: 80px;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    /* border: solid red; */
}

.show_content {
    width: 70%;
    height: auto;
    border-radius: 10px;
    margin-top: 20px;
    background-color: white;
    padding: 48px;
    text-align: justify;
    line-height: 2;
}

.sticky_div {
    width: 100%;
    height: 70px;
    /* 使其下拉跟随浮动 */
    position: sticky;
    top: 0;
    background-color: white;
    /* display: flex; */
    justify-content: space-between;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    /* 阴影效果 */
}

.sticky_inner_div_left {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: small;
    color: gray;
}


.sticky_inner_div_middle {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: small;
    color: black;
    font-weight: bold;
}

.answer_card_top {
    margin-top: 6px;
    margin-left: 15%;
    width: 100px;
    height: 30px;
    background-color: white;
    color: gray;
    font-size: small;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
    border: 1px solid lightgray;
    border-top-right-radius: 10px;
    border-bottom: none !important;
    box-shadow: 0 -6px 10px 0 rgba(60, 70, 79, .07);
    cursor: pointer;
}

.answer_card_top:hover {
    color: #4095E5;
    cursor: pointer;
    /* 鼠标悬停时的文本颜色 */
}

.answer_card_content {
    width: 70%;
    margin-left: 15%;
    height: 300px;
    background-color: white;
    border: 1px solid lightgray;
    border-top: 0;
    padding: 48px;
    text-align: justify;
    line-height: 2;
    overflow-y: scroll;
}

.blank_div {
    width: 70%;
    display: flex;
    flex-direction: row;
    margin-left: 15%;
    height: 20px;
    background-color: white;
    border-radius: 10px;
}

.expand_div {
    flex-grow: 1;
    border: solid 1px lightgray;
    border-left: 0;
    border-bottom: 0;
    border-top-right-radius: 10px;
    padding-right: 30px;
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: right;
    font-size: small;
    cursor: pointer;
}

.expand_div:hover {
    color: #4095E5;
    cursor: pointer;
}

pre {
    white-space: pre-wrap;
    word-wrap: break-word;
}
</style>