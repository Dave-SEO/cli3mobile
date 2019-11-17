<template>
  <!-- 课程分类 -->
  <div class="lesson">
    <vheader></vheader>
    <van-tabs :border="false" v-model="active" :swipeable="true">
      <van-tab v-for="index in 6" :title="'选项 ' + index" :key="index">
        <div class="container">
          {{index}}
          <card myclass="col-3"></card>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import vheader from "@/components/header.vue";
import card from "@/components/card.vue";
export default {
  data() {
    return {
      active: "1"
    };
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
  components: {
    vheader,
    card
  }
};
</script>
<style lang="less" scoped>
.lesson {
  height: 100%;
  .van-tabs {
    height: calc(100% - 46px -54px);
  }
  .container {
    height: calc(100% - 46px -54px - 43px);
  }
  /deep/.van-tab--active {
    font-size: 22px;
    color: #28354c;
  }
  /deep/ .van-tabs--line .van-tabs__wrap {
    margin-top: 20px;
  }
}
</style>
