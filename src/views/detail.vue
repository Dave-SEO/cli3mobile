<!-- 课程详情 -->
<template>
  <div class="detail">
    <van-nav-bar
      title="标题"
      left-text=""
      :border="false"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon name="share" slot="right" />
    </van-nav-bar>
    <div class="player-box"></div>
    <div class="people-decript  border-bottom">
      <div class="avtor"></div>
      <div class="right">
        <div><span class="name">姚琪远</span> <i class="job"> 主任医师</i></div>
        <p class="descript">上海中医药大学附属岳阳中西医结合医院</p>
        <div class="type">乳腺外科</div>
      </div>
    </div>
    <div class="descript-moddle border-top">
      <div class="title border-bottom">简介</div>
      <div class="container">
        <p class="container-top">
          <span>健康有“胸”险</span>
          <i>2017-03-09 </i>
        </p>
        <div class="container-moddle">
          <span class="pv">浏览量：29830</span>
          <div class="tags">
            <van-tag plain>筛查</van-tag>
            <van-tag plain>女性</van-tag>
            <van-tag plain>健康</van-tag>
          </div>
        </div>
        <div class="container-bottom">
          <p>
            乳腺癌是女性的“头号杀手”，筛查对于早诊早治和预后改善的价值毋庸置疑。但乳腺癌筛查，你是否做对了呢？
            复旦大学附属肿瘤医院邵志敏教授通过五个问题的解答来教你如何进行合理筛查乳腺癌一直是各方医学专家们研究的热研究发现，发生转移的乳腺癌细胞高危人群该如何疗…群该如何疗
          </p>
          <div class="down">
            <van-icon name="arrow-down" />
          </div>
        </div>
      </div>
    </div>
    <div style="height:300px"></div>
    <van-popup v-model="show" position="bottom" :style="{ height: '20%' }">
      <van-button type="default" @click="show = false">取消</van-button>
    </van-popup>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data () {
    return {
        show: false
    }
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {
        onClickLeft(){
          this.$router.go(-1)
      },
      onClickRight(){
          this.show = true
      }
  }
}
</script>
<style lang="less" scoped>
.detail {
  //   height: 100%;
  overflow: scroll;
  background: #f8f8f8;
  .player-box {
    width: 100%;
    height: 0;
    padding-bottom: 48%;
    background: #010101;
  }
  .people-decript {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 12px;
    box-sizing: border-box;
    background: #ffffff;
    // border-bottom: 1px solid #ebecf1;
    .avtor {
      width: 36px;
      height: 36px;
      background: url("../assets/images/img.png") no-repeat;
      background-size: cover;
      border-radius: 50%;
      margin-right: 8px;
    }
    .right {
      flex: 1;
      line-height: 18px;
      .name {
        font-size: 14px;
        color: #28354c;
        letter-spacing: 0;
        text-align: center;
        line-height: 14px;
      }
      .job {
        font-size: 12px;
        color: #83889a;
        letter-spacing: 0;
        text-align: center;
        line-height: 14px;
      }
      .descript,
      .type {
        font-size: 12px;
        color: #83889a;
        letter-spacing: 0;
      }
    }
  }
  .descript-moddle {
    margin-top: 8px;
    background: #fff;
    .title {
      font-size: 14px;
      color: #83889a;
      letter-spacing: 0;
      line-height: 40px;
      height: 40px;
      padding-left: 15px;
      box-sizing: border-box;
    }
    .container {
      box-sizing: border-box;
      padding: 0 15px;
      .container-top {
        margin-top: 12px;
        display: flex;
        justify-content: space-between;
        span {
          font-size: 14px;
          color: #28354c;
          letter-spacing: 0;
          line-height: 14px;
        }
        i {
          font-size: 12px;
          color: #a6a8b6;
          letter-spacing: 0;
          line-height: 12px;
        }
      }
      .container-moddle {
        margin-top: 12px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .pv {
          font-size: 12px;
          color: #a6a8b6;
          line-height: 12px;
          margin-right: 8px;
        }
        .tags {
          font-size: 0px;
        }
        .van-tag {
          font-size: 10px;
          margin-right: 8px;
        }
      }
      .container-bottom {
        position: relative;
        font-size: 14px;
        color: #28354c;
        letter-spacing: 0;
        line-height: 24px;
        box-sizing: border-box;
        .down {
          text-align: center;
          .van-icon-arrow-down {
            padding: 10px;
          }
        }
      }
    }
  }
  .van-button {
    width: 100%;
  }
}
</style>
