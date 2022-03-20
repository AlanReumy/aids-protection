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
      <view style="border-radius: 30rpx; overflow: hidden;">
        <row-list :rowList="rowList1"></row-list>
      </view>
      <view style="font-weight: 700; margin:30rpx 0">其他服务</view>
      <view style="border-radius: 30rpx; overflow: hidden;">
        <row-list :rowList="rowList2"></row-list>
      </view>
    </view>
	</view>
</template>

<script>
  import rowList from '../../components/rowList/rowList.vue'
	export default {
    components:{rowList},
		data() {
			return {
        ifLogin:false,
        userInfo:{
          head:'../../static/img/head1.png',
          name:'点击头像登录'
        },
        rowList1:[
          {
            img:'../../static/icon/my/tiwen.png',
            title:'我的提问',
            page:''
          },
          {
            img:'../../static/icon/my/jilu.png',
            title:'浏览记录',
            page:''
          },
          {
            img:'../../static/icon/my/aixin.png',
            title:'在线咨询',
            page:''
          },
        ],
        rowList2:[
          {
            img:'../../static/icon/my/zhiyuan.png',
            title:'成为志愿者',
            page:''
          },
          {
            img:'../../static/icon/my/yuyue.png',
            title:'预约检测',
            page:''
          },
          {
            img:'../../static/icon/my/xianxue.png',
            title:'鲜血服务',
            page:''
          },
          {
            img:'../../static/icon/my/fankui.png',
            title:'意见反馈',
            page:''
          },
          {
            img:'../../static/icon/my/set.png',
            title:'设置',
            page:''
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
</style>
