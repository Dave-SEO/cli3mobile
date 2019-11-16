<template>
  <div class="home">
    <van-nav-bar :border="false">
      <slot slot="left" name="left">
        <van-icon name="arrow-left" size="20px"/>
      </slot>
      <slot slot="title" name="title">微医云课堂</slot>
      <slot slot="right" name="right"></slot>
    </van-nav-bar>
    <van-search placeholder="请输入关键词" shape="round" v-model="value"/>
    <div class="contariner">
      <van-swipe :loop="false" indicator-color="white">
        <van-swipe-item>
          <img src="../assets/images/banner.png" alt class="img">
        </van-swipe-item>
      </van-swipe>
      <div class="lesson-title">
        <h3>直播课程</h3>
        <a href="javascript:;">
          <span>更多</span>
          <van-icon name="arrow"/>
        </a>
      </div>
      <ul class="card-box">
        <li>
          <div class="card-img"></div>
          <p class="card-descript">马丁路德金的演讲：我有一个梦想</p>
        </li>
        <li>
          <div class="card-img"></div>
          <p class="card-descript">马丁路德金的演讲：我有一个梦想</p>
        </li>
        <li>
          <div class="card-img"></div>
          <p class="card-descript">马丁路德金的演讲：我有一个梦想</p>
        </li>
        <li>
          <div class="card-img"></div>
          <p class="card-descript">马丁路德金的演讲：我有一个梦想</p>
        </li>

        <li>
          <div class="card-img"></div>
          <p class="card-descript">马丁路德金的演讲：我有一个梦想</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      // Toast("返回");
    },
    onClickRight() {
      // Toast("按钮");
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  .van-nav-bar .van-icon {
    color: #333333;
  }
  .van-search {
    margin-top: 15px;
  }
  .img {
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
  }
  .lesson-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 15px 25px 15px;
    box-sizing: border-box;
    h3 {
      font-size: 24px;
      color: #28354c;
      letter-spacing: 0;
      line-height: 24px;
    }
    a {
      font-size: 12px;
      color: #83889a;
      letter-spacing: 0;
      text-align: right;
    }
  }
  .contariner {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    height: calc(100% - 46px - 54px - 15px - 1.33333rem);
  }
  .card-box {
    overflow: hidden;
    padding: 0 15px;
    box-sizing: border-box;
    li {
      width: 165px;
      margin-top: 16px;
      margin-right: 12px;
      float: left;
      .card-img {
        width: 100%;
        height: 95px;
      }
      .card-descript {
        width: 154px;
        height: 40px;
        line-height: 20px;
        margin: 0 auto;
        font-size: 14px;
        color: #28354c;
        letter-spacing: 0;
        margin-top: 8px;
      }
      .card-img {
        width: 100%;
        background: url("../assets/images/list.png") no-repeat;
        background-size: cover;
      }
      &:nth-child(even) {
        margin-right: 0;
      }
    }
  }
}
</style>
