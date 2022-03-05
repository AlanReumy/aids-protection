<template>
  <view class="graphic" @click="goVolunteerForm">
    <image src="https://cdn.uviewui.com/uview/album/1.jpg" class="image">
    </image>
    <view class="content">
      <view class="title">{{ item.title }}</view>
      <view class="desc">
        {{ item.desc }}
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    goVolunteerForm() {
      uni.navigateTo({
        url: `/pages/volunteerForm/volunteerForm?item=${JSON.stringify(
          this.item
        )}`
      })
    }
  }
}
</script>

<style scoped lang="scss">
.graphic {
  position: relative;
  margin-bottom: 30rpx;
  height: 210rpx;
  .image {
    position: absolute;
    left: 0px;
    border-radius: 10px;
    width: 190rpx;
    height: 210rpx;
    box-shadow: 2px 2px 2px 2px rgba(238, 238, 238, 0.938);
  }
  .content {
    background-color: #fff;
    position: absolute;
    z-index: 0;
    left: 180rpx;
    width: calc(100% - 190rpx);
    border-radius: 20rpx;
    height: 90px;
    box-shadow: 2px 2px 2px 2px rgba(233, 228, 228, 0.849);
    .title {
      font-weight: bold;
      padding-top: 15rpx;
    }
    .title,
    .desc {
      padding-left: 20px;
    }

    .desc {
      font-size: 35rpx;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
  }
}
</style>
