<template>
  <div class="index">
    <div class="index-1">
      <router-view/>
    </div>
    <van-tabbar v-model="active" :route="true" :border="false">
      <van-tabbar-item icon="wap-home-o" to="/home">主页</van-tabbar-item>
      <van-tabbar-item icon="qr">分类</van-tabbar-item>
      <van-tabbar-item icon="search">我的课堂</van-tabbar-item>
      <van-tabbar-item icon="friends-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      }
    };
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
  components: {}
};
</script>
<style lang="less" scoped>
.index,
.index-1 {
  height: 100%;
}
.van-tabbar {
  background: #ffffff;
  box-shadow: 0 1px 10px 0 rgba(108, 134, 181, 0.15);
}
</style>
