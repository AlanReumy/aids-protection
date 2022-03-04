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
  margin-top: 50rpx;
  margin-bottom: 100rpx;
  .title {
    font-weight: bold;
  }
}
</style>
