<template>
  <!-- <TopNav class="tk-top" /> -->
  <div class="content1">
    <div class="title">关于面试帮</div>

    <div class="section-content clearfix">
      <div class="contact-text l_about_intro_descriptions">
        <p>
          面试帮，于2023年创立，致力于构建一座现代面试求职者的对练社交堡垒。我们的愿景是创造一个"让每位面试者都能够充分发挥自己的潜力，实现职业梦想的平台"。在面试帮，我们提供了一种针对于职场面试者的元宇宙，专注于满足面试者的各项能力提升的需求。
        </p>
        <p>
          面对竞争激烈的职场面试挑战，面试帮呈现出真实、有趣和互助的社交风貌，为面试者提供最为独特的社交体验。我们不仅允许用户自由表达自己，还鼓励他们认知他人，探索面试世界，交流职业兴趣和观点。在面试帮，用户可以获得精神共鸣和认同感，通过对练获取有价值的面试经验，不仅实打实地提高了面试素养，还可以在此建立有质量的新人际关系。
        </p>
        <p>
          面试帮应用以现实世界中的大量真实案例素材为基础，通过机器学习和用户社交画像来推荐高质量的题目解析和素材资料。我们的目标是借助人工智能技术，让每一位面试帮用户都能够轻松愉悦地学习面试知识，高效提高面试能力,并将面试领域的专业从业者与求职者连接起来，提供经济高效的面试交流渠道，以提升求职者的上岸成功率。
        </p>
        <p>在新时代的面试浪潮下，面试帮致力于成为现代求职者的可靠伙伴，为他们提供支持和启发，帮助他们实现职业愿景。我们的对练社交平台是职业发展的指南，让每一位求职者都能在面试中闪耀光芒，找到属于自己的职业之路。</p>
      </div>

    </div>

  </div>
  <!-- <Bottom /> -->
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
  console.log(item);
}
const changeform = function (item) {
  activeform.value = item
  console.log(item);
}
</script>
<style scoped lang="scss">
.tk-top {
  background-color: #3c464f;
}

.content1 {
  padding-top: 70px;
  width: 100%;
  height: 970px;
  background-color: #f5f7fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    margin-top: 100px;
    font-size: 32px;
    font-weight: 500;
    line-height: 45px;
  }

  .section-content {
    margin: 50px auto 120px;
    width: 1000px;
    word-wrap: break-word;
    word-break: break-all;

    .contact-text {
      padding-top: 7px;
      text-align: left;

    }

    .contact-text p {
      font-size: 17px;
      line-height: 32px;
      margin-bottom: 32px;
    }
  }
}</style>