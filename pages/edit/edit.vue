<template>
  <view class="edit">
    <u--textarea
      v-model="title"
      :placeholder="config.titlePlaceHolder"
      border="bottom"
      height="50"
      showConfirmBar
    ></u--textarea>
    <view v-if="config.type === 'question'">
      <u--textarea
        v-model="desc"
        :placeholder="config.descPlaceHolder"
        border="bottom"
        height="200"
        showConfirmBar
      ></u--textarea>
    </view>
    <view v-else>
      <u--textarea
        v-model="content"
        :placeholder="config.descPlaceHolder"
        border="bottom"
        height="200"
        showConfirmBar
      ></u--textarea>
    </view>
    <view class="action">
      <u-button
        type="primary"
        :text="config.buttonText"
        @click="finishEdit"
      ></u-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      config: '',
      title: '',
      desc: '',
      content: '',
      questionId: ''
    }
  },
  onLoad(option) {
    uni.getStorage({
      key: 'userInfo',
      success: (res) => {
        this.userId = res.data.id
      }
    })
    this.config = JSON.parse(option.config)
    this.questionId = JSON.parse(option.questionId)
  },
  methods: {
    finishEdit() {
      if (this.config.type === 'question') {
        this.$request(
          '/question/create',
          {
            title: this.title,
            desc: this.desc,
            userId: this.userId
          },
          'post'
        ).then((res) => {
          uni.navigateTo({
            url: '/pages/question/question'
          })
        })
      } else if (this.config.type === 'answer') {
        this.$request(
          '/answer/create',
          {
            title: this.title,
            content: this.content,
            userId: this.userId,
            questionId: this.questionId
          },
          'post'
        ).then((res) => {
          uni.navigateTo({
            url: `/pages/answer/answer?questionId=${this.questionId}`
          })
        })
      }
    }
  }
}
</script>

<style scoped>
.action {
  margin-top: 20px;
}
</style>
