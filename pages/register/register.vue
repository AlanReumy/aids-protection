<template>
	<view style="padding: 0 20rpx;">
    <u-toast ref="uToast"></u-toast>
		<view class="login-container">
      <view style="width: 60%; ">
        <u--input
            v-model="username"
            placeholder="用户名"
            border="surround"
            shape="circle"
            clearable
          ></u--input>
      </view>
      <view style="width: 60%; margin-top: 30rpx;">
        <u--input
            v-model="phone"
            placeholder="请输入电话号码"
            border="surround"
            shape="circle"
            type="number"
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
          <u-button @click="commit" type="primary" text="注册"></u-button>
      </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        phone:'15826313570',
        username:'11111111',
        password:'11111111'
			}
		},
		methods: {
      commit(){
        var reg=/^[1][3,4,5,7,8,9][0-9]{9}$/;
        if(this.username == ''){
          this.$refs.uToast.show({
          	type: 'error',
          	icon: false,
          	message: "请输入用户名",
          })
          return
        }else if (!reg.test(this.phone)) {
            this.$refs.uToast.show({
            	type: 'error',
            	icon: false,
            	message: "请输入正确的手机号码",
            })
            return
        }else if(this.password==''){
          this.$refs.uToast.show({
          	type: 'error',
          	icon: false,
          	message: "请输入密码",
          })
          return
        }else{
          console.log("ok")
          uni.navigateBack({})
        }
      },
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
