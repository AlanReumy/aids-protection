<template>
  <view class="listItem" @click="goArticleInfo">
    <view class="title">
      <slot name="title">你读过最惊艳的现代诗是什么？</slot>
    </view>
    <view class="author">
      <slot name="author">作者</slot>
    </view>
    <view class="desc">
      <slot name="desc"
        >薛蘅芜： 《我允许》海灵格 我允许任何事情的发生 我允许，事情是如此的开始
        如此的发展，如此的结局 因为我知道， 所有的事情，都是因缘和合而来
        一切的发生，都是必…</slot
      >
    </view>
    <view class="footer">
      <slot name="agreeCount" class="count">1</slot> 赞同·
      <slot name="commentCount" class="count">1</slot> 评论
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data: () => ({}),
  computed: {},
  props: ['info'],
  methods: {
    // 跳转
    goArticleInfo() {
      uni.navigateTo({
        url: `/pages/article/article?info=${JSON.stringify(this.info)}`
      })
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
  margin-top: 20rpx;
  background-color: #fff;
  padding: 0rpx 50rpx;
  .title {
    padding-top: 20rpx;
    font-size: 35rpx;
    font-weight: bold;
  }
  .author {
    margin: 20rpx 0;
    font-size: 30rpx;
  }
  .desc {
    margin: 20rpx 0;
    font-size: 31rpx;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .footer {
    display: flex;
    font-size: 0.8rem;
    padding-bottom: 20rpx;
  }
}
</style>
