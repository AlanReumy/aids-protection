<template>
	<view>
    <view class="card">
      <view class="userInfo" @click="login">
        <view style="overflow: hidden; border-radius: 99rpx;">
          <image src="../../static/img/head1.png" style="width: 90rpx; height: 90rpx;"></image>
        </view>
        <text style="margin-left: 30rpx;">点击头像登录</text>
        <image src="../../static/icon/game.png" style="width: 30rpx; height: 30rpx;margin-left: auto;"></image>
      </view>
    </view>
    <view style="padding: 30rpx 20rpx;">
        <view class="rowList" @click="test">
          <view class="rowListItem" v-for="(item,index) in rowList" :key="index">
              <image :src="item.icon" style="width:40rpx; height:40rpx;"></image>
              <text>{{item.title}}</text>
          </view>
        </view>
      <view class="colList">
        <view class="colListItem" v-for="(item,index) in colList" :key="item.index">
          <view style="display: flex;">
            <image :src="item.icon" style="width:40rpx; height:40rpx;"></image>
            <text style="margin-left: 30rpx;">{{item.title}}</text>
          </view>
          <image src="../../static/icon/game.png" style="width:40rpx; height:40rpx;"></image>
        </view>
      </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        rowList:[
          {
            icon:'../../static/img/head1.png',
            title:'test'
          },
          {
            icon:'../../static/img/head1.png',
            title:'test'
          },
          {
            icon:'../../static/img/head1.png',
            title:'test'
          },
          {
            icon:'../../static/img/head1.png',
            title:'test'
          },
          {
            icon:'../../static/img/head1.png',
            title:'test'
          },
        ],
        colList:[
          {
            icon:'../../static/img/head1.png',
            title:'test'
          },
          {
            icon:'../../static/img/head1.png',
            title:'test'
          },
          {
            icon:'../../static/img/head1.png',
            title:'test'
          },
          {
            icon:'../../static/img/head1.png',
            title:'test'
          },
          {
            icon:'../../static/img/head1.png',
            title:'test'
          },
        ]
			}
		},
		methods: {
      login(){
        uni.navigateTo({
          url:'/pages/login/login'
        })
      },
      test(){
        console.log(this.$store.state.userInfo)
      }
		}
	}
</script>

<style>
  .card{
    padding: 200rpx 20rpx 50rpx;
    background: #54a7ff;
  }
  .userInfo{
    display: flex;
    align-items: center;
    background-color:rgba(57, 57, 57, 0.6);
    padding: 30rpx 30rpx;
    border-radius: 30rpx;
  }
  .rowList{
    display: flex;
    justify-content: space-around;
    padding: 40rpx 0;
    margin-bottom: 30rpx;
    border-radius: 30rpx;
    background-color: #a6fd5f;
  }
  .rowListItem{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .colList{
    border-radius: 30rpx;
    background-color: #41c2fd;
  }
  .colListItem{
    display: flex;
    justify-content: space-between;
    padding: 20rpx 30rpx;
  }
</style>
