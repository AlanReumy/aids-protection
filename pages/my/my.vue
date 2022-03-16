<template>
	<view>
    <view class="card">
      <view class="userInfo" @click="login">
        <view style="overflow: hidden; border-radius: 99rpx;">
          <image :src="userInfo.head" style="width: 90rpx; height: 90rpx;"></image>
        </view>
        <text style="margin-left: 30rpx;">{{userInfo.name}}</text>
        <view style="margin-left: auto;">
          <u-icon name="arrow-right" color="#e53a36" size="28"></u-icon>
        </view>
      </view>
    </view>
    <view style="padding: 30rpx 20rpx;">
        <view class="rowList">
          <view class="rowListItem" v-for="(item,index) in rowList" :key="index">
              <image :src="item.icon" style="width:50rpx; height:50rpx; margin-bottom: 20rpx;"></image>
              <text>{{item.title}}</text>
          </view>
        </view>
      <view class="colList">
        <view class="colListItem" v-for="(item,index) in colList" :key="item.index">
          <view style="display: flex;">
            <image :src="item.icon" style="width:40rpx; height:40rpx;"></image>
            <text style="margin-left: 30rpx;">{{item.title}}</text>
          </view>
          <u-icon name="arrow-right" color="#2d2d2d" size="24"></u-icon>
          <!-- <image src="../../static/icon/game.png" style="width:40rpx; height:40rpx;"></image> -->
        </view>
      </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        ifLogin:false,
        userInfo:{
          head:'../../static/img/head1.png',
          name:'点击头像登录'
        },
        rowList:[
          {
            icon:'../../static/img/tiwen.png',
            title:'我的提问'
          },
          {
            icon:'../../static/img/time.png',
            title:'浏览记录'
          },
          {
            icon:'../../static/img/kefu.png',
            title:'客服与帮助'
          },
        ],
        colList:[
          {
            icon:'../../static/img/Volunteer.png',
            title:'成为志愿者'
          },
          {
            icon:'../../static/img/proposal.png',
            title:'建议反馈'
          },
          {
            icon:'../../static/img/setter.png',
            title:'设置'
          },
        ]
			}
		},
    onLoad() {
      this.getUserInfo()
    },
    mounted() {
    },
		methods: {
      login(){
        if(!this.ifLogin){
          uni.navigateTo({
            url:'/pages/login/login'
          })
        }else{
          uni.navigateTo({
            url:'/pages/PersonalData/PersonalData'
          })
        }
      },
      getUserInfo(){
        let _this = this
        uni.getStorage({
        	key: 'userInfo',
        	success: function (res) {
        		console.log(res.data);
            _this.userInfo.name = res.data.username
            _this.ifLogin = true
        	}
        });
      },
		}
	}
</script>

<style>
  .card{
    padding: 200rpx 20rpx 50rpx;
    background-image: url(../../static/img/headBg.png);
    background-size:cover
  }
  .userInfo{
    display: flex;
    align-items: center;
    background-color:rgba(255,255,255,0.8);
    padding: 30rpx 30rpx;
    border-radius: 30rpx;
  }
  .rowList{
    display: flex;
    justify-content: space-around;
    padding: 40rpx 0;
    margin-bottom: 30rpx;
    border-radius: 30rpx;
    background-color: #e54440;
  }
  .rowListItem{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .colList{
    border-radius: 30rpx;
    background-color: #e35b59;
  }
  .colListItem{
    display: flex;
    justify-content: space-between;
    padding: 20rpx 30rpx;
  }
</style>
