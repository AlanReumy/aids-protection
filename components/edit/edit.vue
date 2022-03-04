<template>
  <view class="edit">
    <u--textarea
      v-model="value"
      :placeholder="config.placeholder"
      border="bottom"
      height="200"
      showConfirmBar
    ></u--textarea>
    <view class="action">
      <u-button
        type="primary"
        :text="config.text"
        @click="finishEdit"
      ></u-button>
    </view>
  </view>
</template>

<script>
export default {
  props: ['config'],
  data() {
    return {
      value: ''
    }
  },
  methods: {
    finishEdit() {
      // todo:增加问题的后台逻辑
      this.$emit('finish-edit')
    }
  }
}
</script>

<style scoped></style>
