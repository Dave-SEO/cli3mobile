<!-- 我的课程 -->
<template>
  <div class="mylesson">
    <van-nav-bar
      title="我的学习"
      left-text
      left-arrow
      :border="false"
      @click-left="onClickLeft"
    />
    <ul class="lesson">
      <li>
        <van-image
          width="100px"
          height="100%"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="lesson-right">
          <p class="descript">如何打造一个炫酷ppt</p>
          <i class="end">直播结束</i>
        </div>
      </li>
      <li>
        <van-image
          width="100px"
          height="100%"
          fit="cover"
          lazy-load
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="lesson-right">
          <p class="descript">如何打造一个炫酷ppt</p>
          <span class="time">2019-10-10</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {
    onClickLeft(){

    }
  }
}
</script>
<style lang="less" scoped>
.mylesson {
  .lesson {
    margin-top: 20px;
    li {
      width: 100%;
      height: 76px;
      display: flex;
      justify-content: flex-start;
      padding: 0 15px;
      box-sizing: border-box;
      margin-bottom: 20px;
      .van-image {
        display: inline-block;
        margin-right: 10px;
      }
      .lesson-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        .descript {
          margin-bottom: 10px;
          font-size: 16px;
          color: #33496e;
          letter-spacing: 0;
        }
        .end {
          font-size: 13px;
          color: #3f86ff;
          letter-spacing: 0;
        }
        .time {
          font-size: 13px;
          color: #83889b;
          letter-spacing: 0;
        }
      }
    }
  }
}
</style>
