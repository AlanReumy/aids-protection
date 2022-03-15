<template>
  <view style="padding: 0 20rpx">
    <u-toast ref="uToast"></u-toast>
<<<<<<< HEAD
		<view class="login-container">
      <view style="width: 80%; display: flex;align-items: center;">
        <text style="width: 20%; margin-right: 10rpx; text-align: end;">用户名</text>
        <view style="width: 80%;">
            <u--input
                v-model="username"
                placeholder="请输入用户名"
                border="surround"
                shape="circle"
                clearable
              ></u--input>
        </view>
      </view>
      <view style="width:80%; margin-top: 30rpx;display: flex; align-items: center;">
        <text style="width: 20%; margin-right: 10rpx;text-align: end;">密码</text>
        <view style="width: 80%;">
          <u--input
              v-model="password"
              placeholder="请输入密码"
              border="surround"
              shape="circle"
              type="password"
              clearable
            ></u--input>
        </view>
=======
    <view class="login-container">
      <view style="width: 60%">
        <u--input
          v-model="username"
          placeholder="请输入用户名"
          border="surround"
          shape="circle"
          clearable
        ></u--input>
      </view>
      <view style="width: 60%; margin-top: 30rpx">
        <u--input
          v-model="password"
          placeholder="请输入密码"
          border="surround"
          shape="circle"
          type="password"
          clearable
        ></u--input>
>>>>>>> 9d9134f77d841f4b1c241c2587c2257e7060243d
      </view>
      <view style="margin-top: 60rpx; width: 60%">
        <u-button @click="commit" type="error" text="登录"></u-button>
      </view>
      <view style="margin-top: 30rpx; width: 60%">
        <u-button @click="register" type="primary" text="注册"></u-button>
      </view>
    </view>
  </view>
</template>

<script>
<<<<<<< HEAD
	export default {
		data() {
			return {
        username:'11111111',
        password:'11111111'
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
          this.$request('/user/login',{
            username:this.username,
            password:this.password
          },'POST').then(res => {
            console.log(res)
            if(res.code == 200){
                this.$store.commit("setUserInfo",res.data);
                uni.switchTab({
                	url: '/pages/my/my',
                  success(){
                  		 let page = getCurrentPages().pop();  //跳转页面成功之后
                               page.onLoad(); //如果页面存在，则重新刷新页面
                  	  }
                });
            }else{
              this.$refs.uToast.show({
              	type: 'error',
              	icon: false,
              	message: res.msg,
              })
              return
            }
              })
        }
      },
      register(){
        uni.navigateTo({
          url:'/pages/register/register'
=======
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    commit() {
      if (!this.username) {
        this.$refs.uToast.show({
          type: 'error',
          icon: false,
          message: '请输入用户名'
        })
        return
      } else if (!this.password) {
        this.$refs.uToast.show({
          type: 'error',
          icon: false,
          message: '请输入密码'
        })
        return
      } else {
        this.$request(
          '/user/login',
          {
            username: this.username,
            password: this.password
          },
          'post'
        ).then((res) => {
          // 打印调用成功回调
          uni.setStorage({
            key: 'userInfo',
            data: res.data,
            success: function () {
              console.log('success')
            }
          })
          this.$store.commit('setUserInfo', res.data)
          uni.navigateBack({})
>>>>>>> 9d9134f77d841f4b1c241c2587c2257e7060243d
        })
      }
    },
    register() {
      uni.navigateTo({
        url: '/pages/register/register'
      })
    }
  }
}
</script>

<style>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50rpx 20rpx;
  margin-top: 300rpx;
  border-radius: 30rpx;
  background-color: #ffffff;
}
</style>
