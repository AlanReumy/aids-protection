<template>
  <view>
    <ArticleInfo :info="info"></ArticleInfo>
  </view>
</template>

<script>
import ArticleInfo from '../../components/articleInfo/articleInfo.vue'
export default {
  onLoad(options) {
    this.info = JSON.parse(options.info)
  },
  data() {
    return {
      info: ''
    }
  },
  methods: {},
  components: { ArticleInfo }
}
</script>

<style></style>
