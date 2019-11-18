<!-- 个人中心 -->
<template>
  <div class="userCenter">
    <van-nav-bar
      title="个人中心"
      left-text
      left-arrow
      :border="false"
      @click-left="onClickLeft"
    />
    <div class="name">
      <van-image
        round
        width="60px"
        height="60px"
        fit="cover"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <a href="javascript:;" class="right"
        ><i class="names">李江源</i><van-icon name="arrow"
      /></a>
    </div>

    <div class="cell">
      <van-cell title="观看设置" icon="shop-o" :border="true">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <van-icon style="line-height: inherit;" size="30px" />
      </van-cell>
      <van-cell title="消息" icon="shop-o" :border="true">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <van-icon style="line-height: inherit;" size="30px" />
      </van-cell>
    </div>
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
.userCenter {
  .name {
    padding-left: 15px;
    box-sizing: border-box;
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
    color: #28354c;
    letter-spacing: 0;
    text-align: center;
    .names {
      margin-right: 10px;
    }
    .right {
      margin-left: 15px;
      font-size: 20px;
      color: #28354c;
      letter-spacing: 0;
    }
    .van-icon {
      color: #b3bdcd;
      font-size: 12px;
    }
  }
  .cell {
    margin-top: 100px;
    .van-cell {
      font-size: 22px;
      color: #28354c;
    }
  }
}
</style>
