<template>
  <view class="block">
    <u-swiper :list="list3" indicator indicatorMode="line" circular></u-swiper>
    <view>检测和咨询</view>
    <view>加入我们</view>
    <view>阳性关怀</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list3: [
        'https://cdn.uviewui.com/uview/swiper/swiper3.png',
        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        'https://cdn.uviewui.com/uview/swiper/swiper1.png'
      ]
    }
  },
  methods: {}
}
</script>

<style></style>
