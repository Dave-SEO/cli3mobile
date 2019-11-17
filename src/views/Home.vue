<template>
  <div class="home">
    <vheader></vheader>
    <div class="contariner">
      <van-swipe :loop="false" indicator-color="white">
        <van-swipe-item>
          <img src="../assets/images/banner.png" alt class="img">
        </van-swipe-item>
      </van-swipe>
      <card myclass="col-2">
        <div class="lesson-title" slot="title">
          <h3>直播课程</h3>
          <a href="javascript:;">
            <span>更多</span>
            <van-icon name="arrow"/>
          </a>
        </div>
      </card>
      <card myclass="col-3">
        <div class="lesson-title" slot="title">
          <h3>最新课程</h3>
          <a href="javascript:;">
            <span>更多</span>
            <van-icon name="arrow"/>
          </a>
        </div>
      </card>

      <card myclass="col-3">
        <div class="lesson-title" slot="title">
          <h3>热门课程</h3>
          <a href="javascript:;">
            <span>更多</span>
            <van-icon name="arrow"/>
          </a>
        </div>
      </card>
      <div style="height:30px;overflow: visible;background: transparent;"></div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card.vue";
import vheader from "@/components/header.vue";
export default {
  data() {
    return {
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
  components: {
    card,
    vheader
  }
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

  .contariner {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    height: calc(100% - 46px - 54px - 15px - 1.33333rem);
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
  }
}
</style>
