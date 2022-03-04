<template>
  <view class="answerList">
    <view v-for="answer in info.answerList" :key="answer.id">
      <AnswerListItem :info="answer"></AnswerListItem>
    </view>
    <u-tabbar
      :value="value1"
      @change="change1"
      :fixed="true"
      :placeholder="false"
      :safeAreaInsetBottom="false"
    >
      <u-tabbar-item
        text="写回答"
        icon="edit-pen"
        @click="editAnswer"
      ></u-tabbar-item>
      <u-tabbar-item
        text="关注问题"
        :icon="heartIcon"
        @click="starQuestion"
      ></u-tabbar-item>
    </u-tabbar>
  </view>
</template>

<script>
import AnswerListItem from './answerListItem.vue'
export default {
  props: ['info'],
  components: { AnswerListItem },
  data() {
    return {
      isStar: false
    }
  },
  computed: {
    heartIcon() {
      return this.isStar ? 'heart-fill' : 'heart'
    }
  },
  methods: {
    editAnswer() {
      const config = {
        placeholder: '写回答',
        text: '发布回答',
        url: '/pages/question/question'
      }
      uni.navigateTo({
        url: `/pages/edit/edit?config=${JSON.stringify(config)}`
      })
    },
    starQuestion() {
      this.isStar = !this.isStar
    }
  }
}
</script>

<style scoped lang="scss">
.answerList {
  margin-bottom: 118rpx;
  background-color: #eee;
}
</style>
