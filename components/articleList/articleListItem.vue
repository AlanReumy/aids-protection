<template>
  <view class="articleListItem">
    <u-read-more :showHeight="showHeight" :toggle="true">
      <view class="title">
        {{ article.title }}
      </view>
      <rich-text :nodes="article.content"></rich-text>
    </u-read-more>
  </view>
</template>

<script>
export default {
  props: ['article', 'showHeight']
}
</script>

<style scoped lang="scss">
.articleListItem {
  margin-top: 20rpx;
  margin-bottom: 20rpx;
  padding: 0 50rpx;
  .title {
    margin-top: 20rpx;
    font-weight: bold;
    padding-bottom: 20rpx;
  }
}
</style>
