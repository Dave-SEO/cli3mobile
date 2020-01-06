<template>
  <div class="card">
    <slot name="title"></slot>
    <ul class="card-box" :class="myclass">
      <li @click="detailClick">
        <div class="card-img"></div>
        <p class="card-descript">马丁路德金的演讲：我有一个梦想</p>
      </li>
      <li @click="detailClick">
        <div class="card-img"></div>
        <p class="card-descript">马丁路德金的演讲：我有一个梦想</p>
      </li>
      <li @click="detailClick">
        <div class="card-img"></div>
        <p class="card-descript">马丁路德金的演讲：我有一个梦想</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {},
  props: {
    myclass: {
      type: String,
      default: "col-2"
    }
  },
  created() {},
  mounted() {},
  methods: {
    detailClick() {
      this.$router.push("/detail");
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.card {
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
        width: 100%;
        height: 40px;
        line-height: 20px;
        margin: 0 auto;
        font-size: 14px;
        color: #28354c;
        letter-spacing: 0;
        margin-top: 8px;
        box-sizing: border-box;
        padding: 0 5px;
      }
      .card-img {
        width: 100%;
        background: url("../assets/images/list.png") no-repeat;
        background-size: cover;
      }
    }
    &.col-2 {
      li {
        &:nth-child(even) {
          margin-right: 0;
        }
      }
    }
    &.col-3 {
      li {
        width: 107px;
        .card-img {
          width: 100%;
          height: 107px;
        }
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
