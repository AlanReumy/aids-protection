<template>
  <view class="volunteerInfo">
    <view class="title">
      {{ item.title }}
    </view>
    <u-subsection
      :list="list"
      :current="current"
      @change="sectionChange"
    ></u-subsection>
    <view class="volunteerDesc" v-if="current == 0">
      {{ item.desc }}
    </view>
    <view class="volunteerForm" v-else-if="current == 1">
      <view class="base header">
        <view class="time">
          <u-icon name="calendar"></u-icon>
          <view class="date">{{ item.info.date }} {{ item.info.time }}</view>
        </view>
      </view>
      <view class="base form">
        <view class="instructions"> 请你填写资料，带*号未必填项目 </view>
        <view class="input">
          <u--form
            labelPosition="left"
            :model="formData"
            :rules="rules"
            ref="uForm"
          >
            <u-form-item
              label="姓名"
              prop="formData.name"
              borderBottom
              ref="name"
            >
              <u--input
                placeholder="请填写姓名"
                v-model="formData.name"
                border="none"
              ></u--input>
            </u-form-item>
            <u-form-item
              label="手机"
              prop="formData.phone"
              borderBottom
              ref="phone"
            >
              <u--input
                placeholder="请填写手机号码"
                v-model="formData.phone"
                border="none"
              ></u--input>
            </u-form-item>
          </u--form>
        </view>
      </view>
      <view class="btn">
        <u-button type="primary" shape="circle" @click="submit">提交</u-button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  onLoad(options) {
    this.item = JSON.parse(options.item)
  },
  data() {
    return {
      item: '',
      list: ['活动须知', '预约详情'],
      current: 0,
      rules: {
        'formData.name': {
          type: 'string',
          required: true,
          message: '请填写姓名',
          trigger: ['change']
        },
        'formData.phone': {
          type: 'string',
          required: true,
          message: '请填写手机号码',
          trigger: ['change']
        }
      },
      formData: {
        name: '',
        phone: ''
      }
    }
  },
  computed: {},
  methods: {
    submit() {
      // todo: 申请的后台逻辑
      uni.navigateBack({})
    },
    sectionChange(index) {
      this.current = index
    }
  }
}
</script>

<style scoped lang="scss">
.volunteerInfo {
  .title {
    padding-left: 40rpx;
    height: 90rpx;
    line-height: 90rpx;
    background-color: #fff;
    border-bottom: 1px solid #eee;
  }
  .volunteerDesc {
    font-size: 34rpx;
    padding: 25rpx;
    border: 1px solid #eee;
    margin: 20rpx;
    border-radius: 15rpx;
    background-color: #fff;
  }
  .volunteerForm {
    .base {
      margin: 20rpx;
      padding-left: 30rpx;
      background-color: #fff;
      font-size: 35rpx;
      font-weight: bold;
      border: 5rpx solid #eee;
      border-radius: 20rpx;
      box-shadow: 2px 2px 2px 2px rgba(238, 238, 238, 0.938);
    }
    .header {
      .time {
        height: 90rpx;
        line-height: 90rpx;
      }
      .time {
        display: flex;
        .date {
          margin-left: 10rpx;
        }
      }
    }

    .form {
      font-weight: normal;
      .instructions {
        font-weight: bold;
        text-align: center;
        height: 90rpx;
        line-height: 90rpx;
        border-bottom: 1px solid #eee;
      }
    }
    .btn {
      padding: 30rpx;
    }
  }
}
</style>
