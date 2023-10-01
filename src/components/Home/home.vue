<template>
  <div class="home">
    <img class="top" src="https://www.tencent.com/img/banners/brief-1-1.jpg" alt="">
    <div class="content">
      <div class="content1">
        <div class="carousel">
          <el-carousel height="400px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small justify-center" text="2xl">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="announcement">
          <!-- 上面的导航栏 -->
          <div class="title">
            <ul>
              <li v-for="(inform,index) in tabs" :key="index" @mouseover = "onTabMouseOver(index)" :class="{ 'active-tabs': activeTab === index }">
                {{inform}}
                <div v-if="activeTab==index" style="width: 15px;height: 3px; background-color: #4095E5;border-radius: 10px; margin-top: 5px;"></div>
              </li>
              
            </ul>
          </div>
          <div class="new-tab-content">
            <!-- 中间部分 -->
            <!-- 新闻 -->
        <ul v-if="activeTab==0" class="new-tab-content-ul" id="J_newsListContainer" >
          <li class="first">
            <a class="item-href" target="_blank" href="//lol.qq.com/news/detail.shtml?docid=10912334831397866538" onclick="PTTSendClick('Notice','Notice-0','杭州亚运会电子竞技项目（英雄联盟）小组循环赛D组比赛赛果');SendEAS.sendNewsPV('index','//lol.qq.com/news/detail.shtml?docid=10912334831397866538','10912334831397866538')">
              广东省省考无领导即将席卷全国，就问你信不信
            </a>
          </li>
          
          <li class="newsitem_event" v-for="(Inform,index) in xinwenInform" :key="index">
            <span class="item-type" style="width: 5%;height: 20px;">赛事</span>
            <a class="item-href" target="_blank" href="//lol.qq.com/news/detail.shtml?docid=8108336011152287680" onclick="PTTSendClick('Notice','Notice-1','杭州亚运会电子竞技项目（英雄联盟）小组循环赛B组比赛赛果');SendEAS.sendNewsPV('index','//lol.qq.com/news/detail.shtml?docid=8108336011152287680','8108336011152287680')">
              {{Inform}}
            </a>
            <span class="item-time">09-25</span>
          </li>
        </ul>
         <!-- 公告 -->
         <ul v-if="activeTab==1" class="new-tab-content-ul" id="J_newsListContainer" >
          <li class="first">
            <a class="item-href" target="_blank" href="//lol.qq.com/news/detail.shtml?docid=10912334831397866538" onclick="PTTSendClick('Notice','Notice-0','杭州亚运会电子竞技项目（英雄联盟）小组循环赛D组比赛赛果');SendEAS.sendNewsPV('index','//lol.qq.com/news/detail.shtml?docid=10912334831397866538','10912334831397866538')">
              广东省省考无领导即将席卷全国，就问你信不信
            </a>
          </li>
          
          <li class="newsitem_event" v-for="(Inform,index) in gonggaoInform" :key="index">
            <span class="item-type" style="width: 5%;height: 20px;">赛事</span>
            <a class="item-href" target="_blank" href="//lol.qq.com/news/detail.shtml?docid=8108336011152287680" onclick="PTTSendClick('Notice','Notice-1','杭州亚运会电子竞技项目（英雄联盟）小组循环赛B组比赛赛果');SendEAS.sendNewsPV('index','//lol.qq.com/news/detail.shtml?docid=8108336011152287680','8108336011152287680')">
              {{Inform}}
            </a>
            <span class="item-time">09-25</span>
          </li>
        </ul>
         <!-- 神贴 -->
         <ul v-if="activeTab==2" class="new-tab-content-ul" id="J_newsListContainer" >
          <li class="first">
            <a class="item-href" target="_blank" href="//lol.qq.com/news/detail.shtml?docid=10912334831397866538" onclick="PTTSendClick('Notice','Notice-0','杭州亚运会电子竞技项目（英雄联盟）小组循环赛D组比赛赛果');SendEAS.sendNewsPV('index','//lol.qq.com/news/detail.shtml?docid=10912334831397866538','10912334831397866538')">
              广东省省考无领导即将席卷全国，就问你信不信
            </a>
          </li>
          
          <li class="newsitem_event" v-for="(Inform,index) in shentieInform" :key="index">
            <span class="item-type" style="width: 5%;height: 20px;">赛事</span>
            <a class="item-href" target="_blank" href="//lol.qq.com/news/detail.shtml?docid=8108336011152287680" onclick="PTTSendClick('Notice','Notice-1','杭州亚运会电子竞技项目（英雄联盟）小组循环赛B组比赛赛果');SendEAS.sendNewsPV('index','//lol.qq.com/news/detail.shtml?docid=8108336011152287680','8108336011152287680')">
              {{Inform}}
            </a>
            <span class="item-time">09-25</span>
          </li>
        </ul>
         <!-- 活动 -->
         <ul v-if="activeTab==3" class="new-tab-content-ul" id="J_newsListContainer" >
          <li class="first">
            <a class="item-href" target="_blank" href="//lol.qq.com/news/detail.shtml?docid=10912334831397866538" onclick="PTTSendClick('Notice','Notice-0','杭州亚运会电子竞技项目（英雄联盟）小组循环赛D组比赛赛果');SendEAS.sendNewsPV('index','//lol.qq.com/news/detail.shtml?docid=10912334831397866538','10912334831397866538')">
              广东省省考无领导即将席卷全国，就问你信不信
            </a>
          </li>
          
          <li class="newsitem_event" v-for="(Inform,index) in huodongInform" :key="index">
            <span class="item-type" style="width: 5%;height: 20px;">赛事</span>
            <a class="item-href" target="_blank" href="//lol.qq.com/news/detail.shtml?docid=8108336011152287680" onclick="PTTSendClick('Notice','Notice-1','杭州亚运会电子竞技项目（英雄联盟）小组循环赛B组比赛赛果');SendEAS.sendNewsPV('index','//lol.qq.com/news/detail.shtml?docid=8108336011152287680','8108336011152287680')">
              {{Inform}}
            </a>
            <span class="item-time">09-25</span>
          </li>
        </ul>
        
        <a target="_blank" class="btn-morenews" href="/news/index.shtml" onclick="PTTSendClick('Notice','Notice-more','阅读更多最新资讯')">
          <span class="c1">阅读更多</span><span class="c2">最新资讯</span><i class="more-arrow"></i>
        </a>

      </div>
        </div>
      </div>

      <div style="width: 100%;height: 50px;margin-top: 120px;color:#676767; display: flex;justify-content: center;align-items: center;font-size: 30px;">产品介绍</div>
      <div style="width: 100%;border: #efefef solid 1px;"></div>
      
      <div class="content2">
        <div class="content2-video">
          <img src="../../assets/static/home_img/音符.svg" class="left_top_img" style="width: 70px;margin-top: -60px;margin-right: 280px;">
          <video width="280" height="620"  loop autoplay muted>
            <source src="../../assets/static/Screen-2023-09-26-174711.mp4" type="video/mp4">
          </video>
        </div>
        <div class="content2-text">
            <div class="text2_1">绽放</div>
            <div class="text2_2">在面试的大舞台上</div>
            <div class="text2_3">社区中的对话如音符般奏响</div>
            <div class="text2_4">一起点亮学习的星空，知识之花因交流而绽放</div>
            <img src="../../assets/static/home_img/lion0.PNG" width="150px" class="right_bottom_img" >
        </div>
      </div>
      <div class="content2">
        <div class="content2-video">
          <img src="../../assets/static/home_img/画笔.svg" class="left_top_img" >
          <video width="280" height="620"  loop autoplay muted>
            <source src="../../assets/static/Screen-2023-09-26-174711.mp4" type="video/mp4">
          </video>
        </div>
        <div class="content2-text">
            <div class="text2_1">定位</div>
            <div class="text2_2">一位独具风采的艺术家</div>
            <div class="text2_3">勾勒着属于自己的面试策略画卷</div>
            <div class="text2_4">深入洞察自身的优势和挑战，达到超越自我的学习之境</div>
            <img src="../../assets/static/home_img/lion1.PNG" width="200px" class="right_bottom_img">
        </div>
      </div>
      <div class="content2">
        <div class="content2-video">
          <img src="../../assets/static/home_img/火焰.svg" class="left_top_img" >
          <video width="280" height="620"  loop autoplay muted>
            <source src="../../assets/static/Screen-2023-09-26-174711.mp4" type="video/mp4">
          </video>
        </div>
        <div class="content2-text">
            <div class="text2_1">舞动</div>
            <div class="text2_2">与志同道合的伙伴交汇</div>
            <div class="text2_3">共同点燃内心的求知之火</div>
            <div class="text2_4">在对练的旋律中，行动与互助的奏鸣曲是突破困境的钥匙</div>
            <img src="../../assets/static/home_img/lion6.PNG" width="200px" class="right_bottom_img">
        </div>
      </div>
      <div class="content2">
        <div class="content2-video">
          <img src="../../assets/static/home_img/钥匙.svg" class="left_top_img" >
          <video width="280" height="620"  loop autoplay muted>
            <source src="../../assets/static/Screen-2023-09-26-174711.mp4" type="video/mp4">
          </video>
        </div>
        <div class="content2-text">
            <div class="text2_1">领略</div>
            <div class="text2_2">与伙伴们开启一场知识之旅</div>
            <div class="text2_3">将问题解锁的钥匙交替传递</div>
            <div class="text2_4">以对话为编码，打造出一幅幅令人惊叹的学习之图</div>
            <img src="../../assets/static/home_img/lion1.PNG" width="200px" class="right_bottom_img">
        </div>
      </div>
      <div class="content2">
        <div class="content2-video">
          <img src="../../assets/static/home_img/灯塔.svg" class="left_top_img" style="width: 180px;">
          <video width="280" height="620"  loop autoplay muted>
            <source src="../../assets/static/Screen-2023-09-26-174711.mp4" type="video/mp4">
          </video>
        </div>
        <div class="content2-text">
            <div class="text2_1">展现</div>
            <div class="text2_2">一座丰富多彩的面试题库</div>
            <div class="text2_3">如智者明灯般的专业解析</div>
            <div class="text2_4">助您探索面试领域未知的星辰，照亮迷雾中的上岸之门</div>
            <img src="../../assets/static/home_img/lion5.PNG" width="200px" class="right_bottom_img">
        </div>
      </div>
      <div class="content2">
        <div class="content2-video">
          <img src="../../assets/static/home_img/钻石2.svg" class="left_top_img" >
          <video width="280" height="620"  loop autoplay muted>
            <source src="../../assets/static/Screen-2023-09-26-174711.mp4" type="video/mp4">
          </video>
        </div>
        <div class="content2-text">
            <div class="text2_1">尊容</div>
            <div class="text2_2">会员身份犹如一面闪烁的宝镜</div>
            <div class="text2_3">在智慧的舞台上享受各种尊贵特权</div>
            <div class="text2_4">助您征服知识的浪潮，让学海之航更加畅通无阻</div>
            <img src="../../assets/static/home_img/lion3.PNG" width="200px" class="right_bottom_img">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElButton } from 'element-plus';
import {ref} from 'vue';
const tabs = ['新闻','公告','神贴','活动'];
const xinwenInform = ['广东省省考无领导即将席卷全国，就问你信不信','广东省省考无领导即将席卷全国，就问你信不信','广东省省考无领导即将席卷全国，就问你信不信','广东省省考无领导即将席卷全国，就问你信不信','广东省省考无领导即将席卷全国，就问你信不信','广东省省考无领导即将席卷全国，就问你信不信']
const gonggaoInform = ['你以为呢','广东省省考无领导即将席卷全国，就问你信不信','广东省省考无领导即将席卷全国，就问你信不信','广东省省考无领导即将席卷全国，就问你信不信','广东省省考无领导即将席卷全国，就问你信不信','广东省省考无领导即将席卷全国，就问你信不信']
const shentieInform = ['我不觉得，就问你信不信','广东省省考无领导即将席卷全国，就问你信不信','广东省省考无领导即将席卷全国，就问你信不信','广东省省考无领导即将席卷全国，就问你信不信','广东省省考无领导即将席卷全国，就问你信不信','广东省省考无领导即将席卷全国，就问你信不信']
const huodongInform = ['开玩笑','广东省省考无领导即将席卷全国，就问你信不信','广东省省考无领导即将席卷全国，就问你信不信','广东省省考无领导即将席卷全国，就问你信不信','广东省省考无领导即将席卷全国，就问你信不信','广东省省考无领导即将席卷全国，就问你信不信']
const activeTab = ref(0);
const onTabMouseOver = (index)=>{
  activeTab.value = index
};

</script>

<style lang="scss" scoped>
.home {
  .top {
    width: 100%;
    height: 400px;
  }

  .content {
    width: 70%;
    margin: 20px auto;
    .content1 {
      margin: 20px 0;
      // width: 77%;
      // height: 400px;

      display: flex;

      .carousel {
        flex: 4;
        margin-right: 10px;
        background-color: pink;

      }

      .announcement {
        flex: 3;
        // background-color: pink;
        // 公告样式
        .title {
          ul {
            width: 100%;
            display: flex;
            justify-content: space-around;
            

            li {
              width: 70px;
              height: 30px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              
            }
            .active-tabs{
                font-size: 16px;
                font-weight: bold;
                cursor:pointer;
                color: #4095E5;
              }
          }
        }
        .new-tab-content {
          width: 496px;
          height: 345px;
            .new-tab-content-ul {
            width: 496px;
            height: 305px;
            position: relative;
            .first{
              list-style: none;
              background-position: 0 -458px;
              width: 496px;
              height: 59px;
              overflow: hidden;
              line-height: 59px;
              text-align: center;
              font-size: 22px;
              font-weight: 700;
              box-sizing: border-box;
              padding: 0 12px;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #4095E5;
              .item-href{
                color: #4095E5;
              }
            }
          .newsitem_event{
            list-style: none;
            width: 496px;
            height: 40px;
            line-height: 39px;
            overflow: hidden;
            box-sizing: border-box;
            border-top: 1px #e0e2e2 solid;
            text-align: left;
            font-size: 0;
            .item-type{
              
              color: #6388c5;
              border: 1px #97afc5 solid;
            }
            .item-href{
              display: inline-block;
              vertical-align: middle;
              *zoom: 1;
              *display: inline;
              width: 370px;
              height: 39px;
              overflow: hidden;
              margin-left: 20px;
              color: #424242;
              font-size: 14px;
              letter-spacing: 1px;
              text-overflow: ellipsis;
              white-space: nowrap;
          }   
            .item-time{
              display: inline-block;
              vertical-align: middle;
              *zoom: 1;
              *display: inline;
              width: 50px;
              height: 39px;
              overflow: hidden;
              text-align: right;
              font-size: 14px;
              letter-spacing: 1px;
              color: #9d9d9d;
              margin-left: 18px;
            }        
          }
          
        }
        .btn-morenews {
            display: block;
            width: 496px;
            height: 40px;
            background-color: #efefef;
            line-height: 40px;
            text-align: center;
            .c1 {
              font-size: 14px;
              color: #676767;
          }  
          .c2 {
              font-size: 14px;
              color: #7ea1a6;
          }
          .more-arrow,.more-arrow-1,.more-arrow-2 {
              display: inline-block;
              vertical-align: middle;
              *zoom:1;*display: inline;
              margin: -2px 0 0 5px;
              animation: 1.5s linear infinite;
              -webkit-animation: 1.5s linear infinite
          }
        }
       }
       


        
      }
    }

    .content2 {
      display: flex;
      justify-content: center;
      align-items: center;
      // width: 77%;
      height: 800px;
      margin-top: 10px;
      // margin: 0 auto;
      // background-color: pink;
      video::-webkit-media-controls {
            display: none;
        }
        .content2-video{
          display:flex;
          justify-content: end;
          width: 600px;
          height: 600px;
          .left_top_img{
            width: 120px;
            height: 150px;
            position: absolute;
            margin-right: 230px;
            margin-top: -80px;
          }
        }
      .content2-text{
        width: 700px;
        height: 400px;
        //background-color: #4095E5;
        margin-left: 80px;
        .text2_1{
          font-size: 70px;
          font-weight: 800;
          transform: translate3d(0,0,0);
          
        }
        .text2_2{
          font-size: 30px;
          font-weight: 500;
          transform: translate3d(0,0,0);
          margin-top: 80px;
        }
        .text2_3{
          font-size: 30px;
          font-weight: 500;
          transform: translate3d(0,0,0);
          
        }
        .text2_4{
          font-size: 18px;
          font-weight: 300;
          transform: translate3d(0,0,0);
          margin-top: 40px;
        }
        .right_bottom_img{
          margin-top: 30px;
          position: absolute;
          margin-left: -100px;
        }
      }
    }
  }
}
</style>