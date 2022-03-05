<template>
  <view style="">
    <u-search
      placeholder="请输入搜索内容"
      :clearabled="true"
      :show-action="true"
      actionText="搜索"
      :animation="true"
      v-model="keyword"
    >
    </u-search>
    <view style="height: 30rpx"></view>
    <u-swiper :list="list1" height="400rpx"> </u-swiper>
    <view style="padding: 30rpx">
      <view class="buttonBlock">
        <view class="button1" style="background: #f55060">
          <view class="button1Left">
            <image
              src="../../static/icon/game.png"
              style="width: 80rpx; height: 80rpx"
            ></image>
          </view>
          <view class="button1right">
            <view style="text-align: center">防艾小游戏</view>
            <view style="text-align: center; color: #ffffff; font-size: 25rpx"
              >知艾防艾</view
            >
          </view>
        </view>
        <view class="button1" style="background: #6395ea">
          <view class="button1Left">
            <image
              src="../../static/icon/volunteer.png"
              style="width: 80rpx; height: 80rpx"
            ></image>
          </view>
          <view class="button1right" @click="goVolunteer">
            <view style="text-align: center">加入我们</view>
            <view style="text-align: center; color: #ffffff; font-size: 25rpx"
              >一同抗艾</view
            >
          </view>
        </view>
      </view>
      <view class="button2" @click="goQuestion">
        <view style="text-align: center; font-size: 50rpx">问答空间</view>
        <view style="text-align: center; color: #ffffff; font-size: 40rpx"
          >可匿名的问答空间</view
        >
      </view>
    </view>
    <swiper :next-margin="20">
      <swiper-item v-for="(item, index) in article" :key="index">
        <view class="swiper-item">
          <text style="font-size: 30rpx; font-weight: 600">{{
            item.title
          }}</text>
          <view class="user">
            <view style="overflow: hidden; border-radius: 99rpx">
              <image
                :src="item.head"
                style="width: 40rpx; height: 40rpx"
              ></image>
            </view>
            <text style="margin-left: 10rpx">{{ item.name }}</text>
          </view>
          <view class="content">
            {{ item.content }}
          </view>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
let img1 = require('../../static/img/5.jpg')
let img2 = require('../../static/img/6.jpg')
let img3 = require('../../static/img/7.jpg')
export default {
  data() {
    return {
      keyword: '',
      list1: [img1, img2, img3],
      article: [
        {
          title: '艾滋病常见症状',
          head: '../../static/img/head1.png',
          name: '阿西吧',
          content:
            'HIV感染者要经过数年、甚至长达10年或更长的潜伏期后才会发展成艾滋病病人，因机体抵抗力极度下降会出现多种感染，如带状疱疹、口腔霉菌感染、肺结核，特殊病原微生物引起的肠炎、肺炎、脑炎，念珠菌、肺孢子虫等多种病原体引起的严重感染等，后期常常发生恶性肿瘤，并发生长期消耗，以至全身衰竭而死亡。'
        },
        {
          title: '得了艾滋病怎么办',
          head: '../../static/img/head2.png',
          name: '后里些',
          content:
            'HIV感染者要经过数年、甚至长达10年或更长的潜伏期后才会发展成艾滋病病人，因机体抵抗力极度下降会出现多种感染，如带状疱疹、口腔霉菌感染、肺结核，特殊病原微生物引起的肠炎、肺炎、脑炎，念珠菌、肺孢子虫等多种病原体引起的严重感染等，后期常常发生恶性肿瘤，并发生长期消耗，以至全身衰竭而死亡。'
        },
        {
          title: '预防艾滋病',
          head: '../../static/img/head3.png',
          name: '王德发',
          content:
            'HIV感染者要经过数年、甚至长达10年或更长的潜伏期后才会发展成艾滋病病人，因机体抵抗力极度下降会出现多种感染，如带状疱疹、口腔霉菌感染、肺结核，特殊病原微生物引起的肠炎、肺炎、脑炎，念珠菌、肺孢子虫等多种病原体引起的严重感染等，后期常常发生恶性肿瘤，并发生长期消耗，以至全身衰竭而死亡。'
        }
      ]
    }
  },
  methods: {
    goQuestion() {
      uni.navigateTo({
        url: '/pages/question/question'
      })
    },
    goVolunteer() {
      uni.navigateTo({
        url: '/pages/volunteer/volunteer'
      })
    }
  }
}
</script>
<style>
.buttonBlock {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30rpx;
}
.button1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 47%;
  height: 150rpx;
  border-radius: 15rpx;
}
.button1Left {
  margin-left: 20rpx;
}
.button1right {
  flex: 1;
}
.button2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 300rpx;
  background: #008800;
  border-radius: 30rpx;
}
.swiper-item {
  width: 90%;
  padding: 10rpx 30rpx 20rpx;
  background: #f3f3f3;
  border-radius: 30rpx;
}
.user {
  display: flex;
  align-items: center;
  margin: 10rpx 0;
}
.content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
