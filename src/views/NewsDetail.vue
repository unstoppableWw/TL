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
                <img src="../static/icon/liulan.png" style="width: 20px;height: 20px;">
                <div style="font-size: small;color: #303132;margin-left: 2px;">{{ view_num }}</div>
                <img @click="dianzan" src="../static/icon/dianzan1.png" v-show="isDianzan" style="width: 20px;height: 20px;margin-left: 20px;">
                <img @click="dianzan" src="../static/icon/dianzan.png" v-show="!isDianzan" style="width: 20px;height: 20px;margin-left: 20px;">
                <div style="font-size: small;color: #303132;margin-left: 2px;">{{ zan_num }}</div>
            </div>
        </div>
        <!-- 分界线 -->
        <div class="divider"></div>
        <div class="news_content" style="padding-top: 0;"
            :style="{ 'font-size': selectedOption === 'big' ? '16px' : selectedOption === 'middle' ? '14px' : '13px' }">
            <pre>{{ news_content }}</pre>
        </div>
    </div>

</template>

<script setup>

import { ref } from 'vue';
const news_title = ref('热爱助力中国电竞，萍乡武功山乡村运动会圆满举办')
const author = ref('天领新闻组')
const post_time = ref('2023/10/05 22:18:36')
const selectedOption = ref('big'); // 设置默认选中的选项为大号字体
const view_num = ref(648)
const isDianzan = ref(false)
const zan_num = ref(328)
const news_content = ref(`
    近期，随着民间足球、篮球等赛事的大热，“村超“概念逐渐被提起。由江西萍乡武功山景区发起，腾讯电竞运动会与英雄联盟联动支持，在江西全省发起了一场“乡村电竞运动会“。
    自9月20日赛事发起，作为多位英雄联盟职业选手的家乡，萍乡再度展现了“电竞之乡”的氛围与风采——一英雄联盟职业电竞选手Knight、Yagao、Lzq，英雄联盟官方主持人余霜等一众江西籍电竞红人，向“老乡们“发起赛事助威号召，在萍乡市里乡间热情玩家拉起了横幅，电竞馆传来此起彼伏的喝彩，全城电竞氛围浓郁，共超过110支队伍，近500人通过线上线下等渠道积极参与选拔。9月29日，在玩家们的期待中，通过选拔胜出的8强战队齐聚决赛现场，争夺“萍乡最强战队“的称号。本届赛事全程由咪咕体育支持，独家直播平台快手在线同步直播。
    最终，来自江西安吉、高安、上饶、南昌等多个城市电电竞玩家，组成的电竞队伍“C4“战队(余熙、金鳞、孙天赐、揭文俊、胡佳明组成)，经历了多轮对战脱颖而出，在现场玩家们的欢呼声中，摘取了首届萍乡武功山乡村电竞运动会的桂冠。同时也获得了与来到本次活动的职业电竞选手——同样来自江西的卢崛(Leyan)、兰梓奇(Lzq)和“咪咕亚运应援大使”王柳羿(Baolan)同台对决的宝贵体验机会。
    在最精彩的明星表演赛的环节，知名说唱歌手subs张毅成也作为特邀嘉宾也加入了精彩对决。双方分别组成了“萍乡队“和“助威队“，展开了精彩绝伦的实力较量。本次赛事的冠军队伍，作为民间选手展现了不输职业选手的缜密意识与华丽操作，赢得了在场观众的阵阵喝彩。
    而在活动现场，恰逢中秋佳节与国庆长假，不少年轻玩家也与朋友或家人结伴来到了活动现场。在副舞台的水友赛环节，许多玩家直接入场参与即时挑战，在朋友与家人面前好好地“露了一手”。知名自媒体创作者“拉宏桑”也带着家人，现身活动现场，表示要让父母感受一下电竞氛围，父女二人更亲自参与了现场水友赛，“原来电竞也是一个需要策略和团队精神的竞技项目呀!难怪年轻人这么热情投入“爸爸边体验游戏边感慨。
    随着萍乡市武功山首届“乡村电竞运动会”的圆满落幕，我们再次见证了玩家对于电竞的无限热情。“我们一直关注电子竞技发展，特别是今年电子竞技成为亚运会的正式比赛项目后，萍乡出身的卓定选手成为了中国国家集训队的一员。我们希望通过举办系列电竞运动赛事，为卓定选手打气助威。同时，这也是我们景区首次举办大型电竞文化活动，我们希望让全国各地来景区游玩的游客们，感受到我们年轻的活力!“江西武功山文旅发展有限公司负责人说到。
    近几年，随着电子竞技体育运动的发展，与电竞关联紧密的区域也得到了越来越多的关注，电竞赛事成为了丰富区域文化活动、促进文旅消费、打响城市名片的重要形式。本次“萍乡乡村电竞运动会”，既是萍乡市作为体育文旅年轻化的一次巨大突破，也是腾讯在电竞下沉上的一次创新尝试，通过“村运会“模式的带动，创造了一个“电竞x乡村“充满潜力的文旅消费场景，让更多的人将会通过电竞看见中国的大小乡镇、美好河山，通过文旅融合看见中国每一个地域的电竞力量。
`)

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
    margin:0 auto;
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

.view_zan_div {
    display: flex;
    align-items: center;
    justify-content: right;
    padding-right: 48px;
    flex-grow: 1;
}
</style>