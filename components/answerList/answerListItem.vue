<template>
  <view class="listItem" @click="goArticleInfo">
    <view class="author">
      <slot name="author">{{ info.author }}</slot>
    </view>
    <view class="desc">
      <slot name="desc">{{ info.content }}</slot>
    </view>
    <view class="footer">
      <slot name="agreeCount" class="count">{{ info.agreeCount }}</slot> 赞同·
      <slot name="commentCount" class="count">{{ info.commentCount }}</slot>
      评论
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
  margin-bottom: 20rpx;
  background-color: #fff;
  padding: 0rpx 50rpx;
  .author {
    padding-top: 30rpx;
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
