<template>
  <view class="learn">
    <u-subsection
      :list="list"
      :current="current"
      @change="sectionChange"
      bgColor="#f9cce1"
      activeColor="#f9cce1"
      inactiveColor="#fff"
    ></u-subsection>
    <view class="experience" v-if="current === 0">
      <ArticleList :articleList="knowledgeList"></ArticleList>
    </view>
    <view class="knowledge" v-else-if="current === 1">
      <ArticleList :articleList="experienceList"></ArticleList>
    </view>
  </view>
</template>

<script>
import ArticleList from '../../components/articleList/articleList.vue'
import knowledgeList from '../../mock/knowledgeList'
import experienceList from '../../mock/experienceList'
export default {
  data() {
    return {
      list: [
        {
          name: '相关科普'
        },
        {
          name: '预防治疗'
        }
      ],
      current: 0
    }
  },
  mounted() {
    this.$store.commit('learnModule/changeKnowledgeList', knowledgeList.data)
    this.$store.commit('learnModule/changeExperienceList', experienceList.data)
  },
  computed: {
    knowledgeList() {
      return this.$store.state.learnModule.knowledgeList
    },
    experienceList() {
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

<style lang="scss" scoped>
.knowledge,
.experience {
  background-color: #eee;
}
</style>
