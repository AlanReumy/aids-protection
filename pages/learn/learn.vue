<template>
  <view class="learn">
    <u-subsection
      :list="list"
      :current="current"
      @change="sectionChange"
    ></u-subsection>
    <view class="knowledge" v-show="current == 0">
      <ArticleList :articleList="knowledgeList"></ArticleList>
    </view>
    <!-- todo: 不显示的问题 -->
    <view class="experience" v-show="current == 1">
      <ArticleList :articleList="experienceList"></ArticleList>
    </view>
  </view>
</template>

<script>
import ArticleList from '../../components/articleList/articleList.vue'
export default {
  data() {
    return {
      list: [
        {
          name: '知识科普'
        },
        {
          name: '经验分享'
        }
      ],
      current: 0
    }
  },
  computed: {
    knowledgeList() {
      return this.$store.state.learnModule.knowledgeList
    },
    experience() {
      return this.$store.state.learnModule.experienceList
    }
  },
  methods: {
    sectionChange(index) {
      this.current = index
    }
  },
  components: { ArticleList }
}
</script>

<style lang="scss" scoped></style>
