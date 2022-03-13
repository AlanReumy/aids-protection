<template>
  <view class="articleInfo">
    <view class="header">
      <view class="avatar">
        <u-icon name="github-circle-fill" size="30px"></u-icon>
      </view>
      <view class="author">{{ info.user.username }}</view>
    </view>
    <view class="title">
      {{ info.title }}
    </view>
    <view class="content">
      {{ info.content }}
    </view>
    <view class="action">
      <view class="agree">
        <u-icon name="thumb-up" size="25px"></u-icon>
        <view class="count">{{ info.agreeCount ? info.agree : 0 }}</view>
      </view>
      <view class="disAgree">
        <u-icon name="thumb-down" size="25px"></u-icon>
        <view class="count">{{ info.disAgree ? info.disAgree : 0 }}</view>
      </view>
    </view>
    <u-divider></u-divider>
    <view class="allComment">全部评论 {{ commentList.length }}</view>
    <CommentList :commentList="commentList"></CommentList>
  </view>
</template>

<script>
import CommentList from '../../components/commentList/commentList'
export default {
  data() {
    return {
      info: '',
      commentList: []
    }
  },
  onLoad(option) {
    this.info = JSON.parse(option.info)
    this.$request('/comment/list?answerId=' + this.info.id).then((res) => {
      this.$store.commit('faqModule/changeCommentList', res.data)
      this.commentList = this.$store.state.faqModule.commentList
    })
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
  .title {
    margin: 30rpx 10rpx;
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
