<template>
  <div class="login">
    <div class="container">
      <div class="logo"></div>
      <div class="btn-box">
        <van-button round type="info" size="large" to="/loginPage"
          >登陆</van-button
        >
        <van-button round plain type="info" size="large">注册</van-button>
      </div>
    </div>
    <div class="close">
      <van-icon name="cross" color="#3F86FF" size="24px" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
  components: {}
};
</script>
<style lang="less" scoped>
.login {
  position: relative;
  height: 100%;
  overflow: hidden;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
    .btn-box {
      width: 100%;
      padding: 0 38px;
      margin-top: 40px;
      box-sizing: border-box;
      .van-button {
        margin-top: 24px;
      }
    }
    .logo {
      width: 120px;
      height: 110px;
      background: url("../assets/images/logo.png") no-repeat;
      background-size: contain;
    }
  }
  .close {
    position: absolute;
    left: 22px;
    top: 20px;
  }
}
</style>
