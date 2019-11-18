<template>
  <div>
    <van-nav-bar :border="false" @click-left="onClickLeft">
      <slot slot="left" name="left">
        <van-icon name="arrow-left" size="20px" />
      </slot>
      <slot slot="title" name="title">微医云课堂</slot>
      <slot slot="right" name="right"></slot>
    </van-nav-bar>
    <van-search placeholder="请输入关键词" shape="round" v-model="value" />
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
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>
<style lang="less" scoped></style>
