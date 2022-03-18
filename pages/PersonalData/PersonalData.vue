<template>
	<view>
		<view class="infoItem">
      <u-icon name="arrow-right" color="#787878" size="22"></u-icon>
      <image src="../../static/img/head1.png" style="width: 120rpx; height: 120rpx; border-radius: 30rpx;"></image>
      <text style="margin-right: auto; text-align: left;">头像</text>
		</view>
    <view class="infoItem">
      <u-icon name="arrow-right" color="#787878" size="22"></u-icon>
      <text>{{userInfo.username}}</text>
      <text style="margin-right: auto; text-align: left;">用户名</text>
    </view>
    <view class="infoItem">
      <u-icon name="arrow-right" color="#787878" size="22"></u-icon>
      <text>{{userInfo.phone}}</text>
      <text style="margin-right: auto; text-align: left;">手机</text>
    </view>
    <view class="button-container">
      <view class="button" @click="modify">
        更改信息
      </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        userInfo:{
          username: "adminTest", //用户名
          password: "123456", //密码
          phone: "13036397961", //手机号
          userId: "1" //用户id
        },
			}
		},
    onLoad() {
      let _this = this
      uni.getStorage({
      	key: 'userInfo',
      	success: function (res) {
      		console.log(res.data);
          _this.userInfo.username = res.data.username
          _this.userInfo.phone = res.data.phone
      	}
      });
    },
		methods: {
      modify(){
        uni.navigateTo({
          url:'/pages/modifyInfo/modifyInfo'
        })
      }
		}
	}
</script>

<style>
  .infoItem{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 20rpx 20rpx;
    background-color: #FFFFFF;
  }
  .button-container{
    background-color: #FFFFFF;
    padding: 50rpx 200rpx;
  }
  .button{
    background-color: #3b99fb;
    padding:20rpx 0;
    border-radius: 30rpx;
    text-align: center;
    color: #FFFFFF;
  }
  .button:hover{
    background-color: #2481fb;
  }
</style>
