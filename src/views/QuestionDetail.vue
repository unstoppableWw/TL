<template>
    <!-- <TopNav style="background-color: #1d282d;position: relative;" /> -->
    <!-- 滚动信息显示条 -->
    <div class="sticky_div">
        <div class="sticky_inner_div_left">
            <RouterLink to="/tiku">
                返回
            </RouterLink>
        </div>
        <div class="sticky_inner_div_middle">
            <h2>{{ title }}</h2>
        </div>
        <!-- 占宽使用，无意义 -->
        <div style="width: 20%;"></div>
    </div>
    <div class="outside_container">
        <!-- 试题内容 -->
        <div class="show_content" style="padding-top: 0;">
            <!-- pre能够保留文本的空格换行等格式 -->
            <pre>{{ content }}</pre>
        </div>
    </div>
    <div style="position: sticky;bottom: 0;">
        <!-- 解析卡 -->
        <div class="answer_card_top" @click="toggleAnswer" >
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
            :style="{ 'height': expandAnswer ? '730px' : '300px' }">
            <pre>{{ answer }}</pre>
        </div>
    </div>
    <!-- <Bottom style=" position: relative" /> -->
</template>
<script setup>
import TopNav from '@/components/TopNav.vue'
import Bottom from '@/components/Bottom.vue'
import { ref } from 'vue';
const title = ref('2023年北京市《无领导》面试题')
const showAnswer = ref(false);
const expandAnswer = ref(false);
const buttonText = ref('分析参考');
const expandText = ref('拉长⬆');
const content = ref(`
【背景材料】
    为“加快培育建设国际消费中心城市”,努力把疫情影响降至最低,激发消费潜力,G市提出了 9 条促进消费的措施:
    1.发放电子消费券、商家优惠券，给予企业补助;
    2.春节、国庆节等节假日期间，励行业协会和商家开展促销活动，降低商品价格，给予企业补助;
    3.开展线上促销活动，励企业发展电商平台，利用互联网开展产品营销、直播销货等;
    4.支持企业开展线下展销会，推广农产品，政府对展销会运输费、展销费给予支持;
    5.发展夜间经济，打造特色餐饮文化街道，建立网红打卡低，鼓励市民参与消费;
    6.支持企业升级改造，鼓励开国内外知名品牌店，对首发品牌店给予奖励;
    7.发展文旅业促进消费，文化馆、博物馆等文化类的场馆降低门票价格;
    8.落实带薪休假制度，让年休与公休日相连，刺激消费;
    9.营造良好的消费环境，加强监管，对医药、食品、日常消费品等领域进行专项整治;
 【身份任务】
    选出 3 项最有效施并说明理由。
 【程序要求】
    1.阅读思考阶段，请考生认真读题，并准备发言提纲。每人时间为 10 分钟。
    2.个人陈述阶段:请考生按考号从小到大就任务进行个人陈述。每人时间为 3 分钟。
    3.自由论阶段:请考生就任务进行论,并达成一致观点。时间为4-5 人 30 分钟6-7人40分钟,8-9人50分钟。
    4.总结陈述阶段:请考生按考号从大到小进行个人总结。每人时间为 2 分钟。
 【注意事项】
    1.考生必须根据试题给出的任务，按照要求自主进行讨论，讨论期间，考生不得再向考官询问任何问题。
    2.小组必须在规定的时间内完成任务，如果考生提前完成任务，经考官研究决定，可进行下一阶段任务。
    3.禁止为达成一致意见而使用投票表决的方式。
    4.他人发意见时，不得进行人身攻击。
`)
const answer = ref(`
【选项要素分析参考】
    1.重要性
    发放电子消费券、商家优惠券，给予企业补助。这一措施可以直接刺激人们的消费欲望，2/8规定时间内进行消费，精准可控，起到立竿见影的效果。也可以精确地控制参与的行业和商家，起到定点帮扶的效果。例如东莞的“乐购东莞”小程序;深圳南山的“HiG南山美好生活”广州的“羊城欢乐购·冬至合家欢”等。
    2.重要性
    春节、国庆节等节假日期间，鼓励行业协会和商家开展促销活动，降低商品价格，给子企业补助。这一措施从目前形势来看，预计产生的效果不会太好。因为目前各大商家在各种节假日已经开展了无数次的促销活动，消费者已经麻木，而且经常性地促销给人以廉价的感觉，不利于G市消费城市的形象。
    3.重要性
    开展线上促销活动，鼓励企业发展电商平台，利用互联网开展产品营销、直播销货等这一措施可以增加商家的销售渠道，借助互联网和短视频等线上渠道，进行产品交易。当下新冠肺炎疫情点多面广反复爆发，导致线下的商业活动锐减，人们不敢出门，商家无法营业,使得经济活动不畅。利用互联网和短视频等形式，既避免人员接触，又可以进行交易是当下非常好的促进消费的方法。
    4.重要性
    支持企业开展线下展销会，推广农产品，政府对展销会运输费、展销费给予支持。这一措施在当下不推荐，疫情还未结束，国家对疫情的防控政策会限制人员流动，所以参加展销会的人员不会太多。
    5.重要性
    发展夜间经济，打造特色餐饮文化街道，建立网红打卡地，鼓励市民参与消费。这一措施可以促进当地经济发展。夜间经济是休闲经济的重要组成部分。其业态包括:晚间购物餐饮、旅游、沐浴、美容美发、休闲、保健、学习、教育、歌舞、影视、娱乐等内容，是第三产业的重要组成部分，它能带动购物、餐饮、文化、娱乐、观光、旅游、健身、交通等多行业的发展，成为城市经济发展新的增长点。
`)

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

.outside_container {
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