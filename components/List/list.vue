<template>
  <view class="list">
    <view v-for="item in listData" :key="item.id">
      <ListItem :info="item">
        <template #title>{{ item.title }}</template>
        <template #author>{{ item.author }}</template>
        <template #desc>{{ item.desc }}</template>
        <template #agreeCount>{{ item.agreeCount }}</template>
        <template #commentCount>{{ item.commentCount }}</template>
      </ListItem>
    </view>
  </view>
</template>

<script>
import ListItem from './listItem.vue'
export default {
  props: ['listData'],
  name: 'list',
  components: {
    ListItem
  },
  data() {
    return {}
  },
  computed: {}
}
</script>

<style lang="scss" scoped></style>
