<template>
  <view class="commentList">
    <view v-for="comment in commentList" :key="comment.id">
      <view class="comment">
        <view class="header">
          <view class="avatar">
            <view v-if="comment.avatar">
              {{ comment.avatar }}
            </view>
            <u-icon v-else name="github-circle-fill" size="30px"></u-icon>
          </view>
        </view>
        <view class="commentInfo">
          <view class="author">{{ comment.user.username }}</view>
          <view class="content">
            {{ comment.content }}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: ['commentList'],
  mounted() {
    console.log(this.commentList)
  }
}
</script>

<style scoped lang="scss">
.commentList {
  .comment {
    display: flex;
    margin-bottom: 40rpx;
    .commentInfo {
      margin-left: 20rpx;
      .author {
        font-size: 34rpx;
      }
      .content {
        margin-top: 10rpx;
        font-size: 35rpx;
      }
    }
  }
}
</style>
