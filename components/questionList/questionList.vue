<template>
  <view class="list">
    <view v-for="item in listData" :key="item.id">
      <QuestionListItem :info="item">
        <template #question>{{ item.question }}</template>
        <template #author>提问者：{{ item.author }}</template>
        <template #desc>问题描述：{{ item.desc }}</template>
        <template #agreeCount>{{ item.agreeCount }}</template>
        <template #commentCount>{{ item.commentCount }}</template>
      </QuestionListItem>
    </view>
    <view class="icon" @click="askQuestion"
      ><u-icon name="plus-circle" size="20px"></u-icon
    ></view>
  </view>
</template>

<script>
import QuestionListItem from './questionListItem.vue'
export default {
  props: ['listData'],
  name: 'list',
  components: {
    QuestionListItem
  },
  data() {
    return {}
  },
  methods: {
    askQuestion() {
      const config = {
        placeholder: '输入问题',
        text: '发布问题',
        url: '/pages/question/question'
      }
      uni.navigateTo({
        url: `/pages/edit/edit?config=${JSON.stringify(config)}`
      })
    }
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
.list {
  position: relative;
  .icon {
    top: 75%;
    right: 50rpx;
    position: fixed;
  }
}
</style>
