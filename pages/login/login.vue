<template>
	<view style="padding: 0 20rpx;">
    <u-toast ref="uToast"></u-toast>
		<view class="login-container">
      <view style="width: 60%;">
        <u--input
            v-model="username"
            placeholder="请输入用户名"
            border="surround"
            shape="circle"
            clearable
          ></u--input>
      </view>
      <view style="width: 60%; margin-top: 30rpx;">
          <u--input
              v-model="password"
              placeholder="请输入密码"
              border="surround"
              shape="circle"
              type="password"
              clearable
            ></u--input>
      </view>
      <view style="margin-top: 60rpx;width: 60%;">
          <u-button @click="commit" type="error" text="登录"></u-button>
      </view>
      <view style="margin-top: 30rpx;width: 60%;">
          <u-button @click="register" type="primary" text="注册"></u-button>
      </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        username:'',
        password:''
			}
		},
		methods: {
      commit(){
        if (!this.username) {
            this.$refs.uToast.show({
            	type: 'error',
            	icon: false,
            	message: "请输入用户名",
            })
            return
        }else if(!this.password){
          this.$refs.uToast.show({
          	type: 'error',
          	icon: false,
          	message: "请输入密码",
          })
          return
        }else{
          this.$request('/admin/info', {
              }).then(res => {
                // 打印调用成功回调
                console.log(res)
                this.$store.commit("setUserInfo",res);
                uni.navigateBack({})
              })
        }
      },
      register(){
        uni.navigateTo({
          url:'/pages/register/register'
        })
      }
		}
	}
</script>

<style>
  .login-container{
   display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50rpx 20rpx ;
    margin-top: 300rpx;
    border-radius: 30rpx;
    background-color: #FFFFFF;
  }
</style>
