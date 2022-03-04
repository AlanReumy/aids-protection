<template>
  <view class="articleList">
    <view v-for="article in articleList" :key="article.id">
      <ArticleListItem :article="article" :showHeight="200"></ArticleListItem>
    </view>
  </view>
</template>

<script>
import ArticleListItem from './articleListItem.vue'
export default {
  props: ['articleList'],
  data() {
    return {}
  },
  components: { ArticleListItem }
}
</script>

<style scoped lang="scss"></style>
