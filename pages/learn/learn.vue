<template>
  <view class="learn">
    <view class="item">知识科普</view>
    <view class="item">经验分享</view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.learn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .item {
    width: 400rpx;
    text-align: center;
    margin-bottom: 50rpx;
    height: 200rpx;
    font-size: 50rpx;
    line-height: 200rpx;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 20px;
    box-shadow: 10px 10px 10px 10px #eee;
  }
}
</style>
