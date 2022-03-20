<template>
  <view class="rowList" :style="{ background: listBgColor }">
    <view
      class="rowListItem"
      :style="{ background: itemBgColor }"
      v-for="(item, index) in rowList"
      :key="index"
      @click="pageJump(item.page)"
    >
      <image
        :src="item.img"
        :style="{ width: imgWidth, height: imgHeigth }"
         style="margin-bottom: 20rpx"
      ></image>
      <text :style="{ color: color, fontSize: fontSize }">{{
        item.title
      }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'rowList',
  components: {},
  props: {
    rowList: {//列表信息（跳转链接，图标，标题）
      type: Array,
      default: [
        {
          img: '../../static/icon/my/aixin.png', //icon
          title: '志愿服务',
          page: '/pages/my/my' //服务表单页面
        },
        {
          img: '../../static/icon/my/aixin.png', //icon
          title: '志愿服务',
          page: '/pages/my/my' //服务表单页面
        },
        {
          img: '../../static/icon/my/aixin.png', //icon
          title: '志愿服务',
          page: '/pages/my/my' //服务表单页面
        },
        {
          img: '../../static/icon/my/aixin.png', //icon
          title: '志愿服务',
          page: '/pages/my/my' //服务表单页面
        }
      ]
    },
    listBgColor: {//列表背景颜色
      type: String,
      default: '#FFFFFF'
    },
    itemBgColor: {//选项背景颜色
      type: String,
      default: '#FFFFFF'
    },
    imgWidth: {//图片大小
      type: String,
      default: '50rpx'
    },
    imgHeigth: {
      type: String,
      default: '50rpx'
    },
    color: {//标题颜色
      type: String,
      default: '#333333'
    },
    fontSize: {//标题大小
      type: String,
      default: '32rpx'
    }
  },
  data() {
    return {}
  },
  methods:{
    pageJump(page){
    	uni.navigateTo({
    	  url:page
    	})
    }
  }
}
</script>

<style>
.rowList {
  padding: 20rpx 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.rowListItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40rpx;
  flex-basis: 33.33%;
}
</style>
