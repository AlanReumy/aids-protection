<template>
  <view class="question">
    <QuestionList :listData="listData" />
  </view>
</template>

<script>
import QuestionList from '../../components/questionList/questionList.vue'
export default {
  components: {
    QuestionList
  },
  data: () => ({}),
  computed: {
    listData() {
      return this.$store.state.faqModule.faqList
    }
  },
  methods: {},
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

<style scoped lang="scss">
.question {
  background-color: #eee;
}
</style>
