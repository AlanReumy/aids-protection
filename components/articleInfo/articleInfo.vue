<template>
  <view class="articleInfo">
    <view class="header">
      <view class="avatar">
        <u-icon name="github-circle-fill" size="30px"></u-icon>
      </view>
      <view class="author">{{ info.author }}</view>
    </view>
    <view class="content">
      {{ info.content }}
    </view>
    <view class="action">
      <view class="agree">
        <u-icon name="thumb-up" size="25px"></u-icon>
        <view class="count">{{ info.agreeCount }}</view>
      </view>
      <view class="disAgree">
        <u-icon name="thumb-down" size="25px"></u-icon>
        <view class="count">{{ info.agreeCount }}</view>
      </view>
    </view>
    <u-divider></u-divider>
    <view class="allComment">全部评论 {{ info.commentCount }}</view>
    <CommentList :commentList="info.commentList"></CommentList>
  </view>
</template>

<script>
import CommentList from '../commentList/commentList.vue'
export default {
  props: ['info'],
  created() {
    console.log(this.info)
  },
  components: { CommentList }
}
</script>

<style scoped lang="scss">
.articleInfo {
  padding: 30rpx;
  .header {
    margin-top: 30rpx;
    display: flex;
    .avatar {
      width: 100rpx;
    }
  }
  .content {
    margin: 30rpx 10rpx;
  }
  .action {
    margin: 50rpx 0;
    display: flex;
    .agree,
    .disAgree {
      font-size: 30rpx;
      display: flex;
      margin-right: 20rpx;
      .count {
        line-height: 60rpx;
      }
    }
  }
  .allComment {
    font-size: 30rpx;
    margin: 30rpx 0;
  }
}
</style>
