<template>
	<view>
		<view class="userInfo">
		  <view style="overflow: hidden; border-radius: 99rpx;">
		    <image src="../../static/img/head1.png" style="width: 90rpx; height: 90rpx;"></image>
		  </view>
		  <text style="margin-left: 30rpx;">山东分公司</text>
		</view>
    <view style="padding: 30rpx 20rpx;">
      <view style="border-radius: 30rpx; background-color: #33f3fd;">
        <view class="functionItem" v-for="(item,index) in functionList" :key="item.index">
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
        functionList:[
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

		}
	}
</script>

<style>
  .userInfo{
    display: flex;
    align-items: center;
    background: #54a7ff;
    padding: 70rpx 50rpx;
  }
  .functionItem{
    display: flex;
    justify-content: space-between;
    padding: 20rpx 30rpx;
  }
</style>
