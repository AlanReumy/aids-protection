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
        @click="click1"
      ></u-tabbar-item>
      <u-tabbar-item
        text="关注问题"
        icon="heart"
        @click="click1"
      ></u-tabbar-item>
    </u-tabbar>
  </view>
</template>

<script>
import AnswerListItem from './answerListItem.vue'
export default {
  props: ['info'],
  components: { AnswerListItem }
}
</script>

<style scoped lang="scss">
.answerList {
  margin-bottom: 118rpx;
  background-color: #eee;
}
</style>
