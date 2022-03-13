<template>
  <view class="listItem" @click="goAnswerList">
    <view class="title">
      <slot name="title">{{ info.title }}</slot>
    </view>
    <view class="desc">
      <slot name="desc">{{ info.content }}</slot>
    </view>
    <view class="author">
      <slot name="author">{{ info.user.username }}</slot>
    </view>
    <view class="footer">
      <slot name="agreeCount" class="count">{{
        info.agree ? info.agree : 0
      }}</slot>
      赞同·
      <slot name="disAgreeCount" class="count">{{
        info.disAgree ? info.disAgree : 0
      }}</slot>
      反对
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    showData: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({}),
  computed: {},
  mounted() {},
  props: ['info'],
  methods: {
    // 跳转
    goAnswerList() {
      uni.redirectTo({
        url: `/pages/article/article?info=${JSON.stringify(this.info)}`
      })
      console.log(999)
    }
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  onPullDownRefresh() {
    uni.stopPullDownRefresh()
  },
  // 页面处理函数--监听用户上拉触底
  onReachBottom() {}
  // 页面处理函数--监听页面滚动(not-nvue)
  /* onPageScroll(event) {}, */
  // 页面处理函数--用户点击右上角分享
  /* onShareAppMessage(options) {}, */
}
</script>

<style lang="scss" scoped>
.listItem {
  margin-bottom: 20rpx;
  background-color: #fff;
  padding: 0rpx 50rpx;
  .author {
    font-size: 30rpx;
  }
  .desc {
    margin: 20rpx 0;
    font-size: 31rpx;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    padding-bottom: 20rpx;
  }
  .footer {
    display: flex;
    font-size: 0.8rem;
    padding-bottom: 20rpx;
  }
}
</style>
