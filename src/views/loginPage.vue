<!-- 登录 -->
<template>
  <div>
    <van-nav-bar
      title="登录"
      left-text
      left-arrow
      :border="false"
      @click-left="onClickLeft"
    />
    <div class="form">
      <div
        class="input"
        :class="{ 'border-bottom': !boldBorder1, 'bold-border': boldBorder1 }"
      >
        <label for="username">用户名</label>
        <input
          id="username"
          type="text"
          v-model="form.username"
          @focus="focusFrom1"
          @blur="blurFrom1"
        />
      </div>
      <div
        class="input border-bottom"
        :class="{ 'border-bottom': !boldBorder2, 'bold-border': boldBorder2 }"
      >
        <label for="password">密码</label>
        <input
          id="password"
          :type="eye ? 'text' : 'password'"
          v-model="form.password"
          @focus="focusFrom2"
          @blur="blurFrom2"
        />
        <van-icon
          name="closed-eye"
          @click.stop="eyeCLick"
          v-show="!eye"
          size="20px"
        />
        <van-icon name="eye" v-show="eye" @click.stop="eyeCLick" size="20px" />
      </div>
      <div class="btn-box">
        <van-button round type="info" size="large" :disabled="false" to="/home"
          >登陆</van-button
        >
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data () {
    return {
        form:{
            username: '',
            password: ''
        },
        boldBorder1: false,
        boldBorder2: false,
        eye: false
    }
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {
      onClickLeft(){
          this.$router.go(-1)
      },
      focusFrom1(){
        this.boldBorder1 = true
      },
      blurFrom1(){
        this.boldBorder1 = false
      },
       focusFrom2(){
        this.boldBorder2 = true
      },
      blurFrom2(){
        this.boldBorder2 = false
      },
      eyeCLick(){
          this.eye = !this.eye
      }
  }
}
</script>
<style lang="less" scoped>
.form {
  padding: 0 38px;
  margin-top: 70px;
  box-sizing: border-box;
  .input {
    position: relative;
    margin-top: 20px;
    box-sizing: border-box;
    font-size: 14px;
    input {
      display: block;
      width: 100%;
      height: 30px;
    }
    label {
      display: block;
      font-size: 12px;
      color: #c4c5ce;
      letter-spacing: 0;
      line-height: 12px;
      margin-bottom: 8px;
    }
    &.border-bottom::before {
      border-color: #c4c5ce;
    }
    &.bold-border {
      border-bottom: 1px solid #28354c;
    }
    .van-icon {
      position: absolute;
      top: 18px;
      right: 0;
      padding: 8px;
    }
  }
  .btn-box {
    margin-top: 40px;
  }
}
</style>
