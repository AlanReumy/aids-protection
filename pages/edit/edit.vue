<template>
  <view class="ask">
    <Edit :config="config" @finish-edit="finishEdit"></Edit>
  </view>
</template>

<script>
import Edit from '../../components/edit/edit.vue'
export default {
  components: { Edit },
  data: () => ({
    question: '',
    config: ''
  }),
  computed: {},
  methods: {
    finishEdit() {
      uni.redirectTo({
        url: this.config.url
      })
    }
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad(options) {
    this.config = JSON.parse(options.config)
  },
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

<style scoped lang="scss">
.ask {
  margin: 40rpx;
  .action {
    margin-top: 50rpx;
  }
}
</style>
