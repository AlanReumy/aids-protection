<template>
  <view style="padding: 20rpx 0;">
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
    <view class="button-container">
      <view class="button" @click="entryMap">
        获取药物
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data(){
      return{
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
    methods:{
      entryMap(){
        uni.navigateTo({
          url:'../map/map'
        })
      }
    }
  }
</script>

<style>
  .button-container{
    margin-top: 200rpx;
    display: flex;
    justify-content: center;
  }
  .button{
    width: 400rpx;
    line-height: 400rpx;
    height: 400rpx;
    border-radius: 99px;
    background-color: #ff3056;
    color: #FFFFFF;
    font-size: 40rpx;
    text-align: center;
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
