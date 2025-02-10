<!-- 蓝色简洁注册页面 -->
<template>
	<view class="t-login">
		<!-- 页面装饰图片 -->
		<image class="img-a" src="https://zhoukaiwen.com/img/loginImg/2.png"></image>
		<image class="img-b" src="https://zhoukaiwen.com/img/loginImg/3.png"></image>
		<!-- 标题 -->
		<view class="t-b">{{ title }}</view>
		<view class="t-b2">欢迎使用，小程序</view>
		<form class="cl">
			<view class="t-a">
				<image></image>
				<view class="line"></view>
				<input type="text" name="email" placeholder="请输入邮箱号" v-model="email" />
			</view>
			<view class="t-a">
				<image src="https://zhoukaiwen.com/img/loginImg/yz.png"></image>
				<view class="line"></view>
				<input type="number" name="verificationCode" placeholder="请输入验证码" v-model="verificationCode" />
				<button @tap="sendVerificationCode()" class="send-code-btn">发送验证码</button>
			</view>
			<view class="t-a">
				<image src="https://zhoukaiwen.com/img/loginImg/yz.png"></image>
				<view class="line"></view>
				<input type="password" name="password" placeholder="请输入密码" v-model="password" />
			</view>
			<button @tap="register()">注 册</button>
			<view class="t-f">
				<text>已有账号？</text>
				<text @tap="navigateToLogin" style="color: #5677fc;">立即登录</text>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '欢迎注册！', //填写logo或者app名称，也可以用：欢迎注册，看您需求
				email: '', //邮箱号
				verificationCode: '', //验证码
				password: '' //密码
			};
		},
		onLoad() {},
		methods: {
			// 发送验证码
			sendVerificationCode() {
				var that = this;
				if (!that.email) {
					uni.showToast({
						title: '请输入邮箱号',
						icon: 'none'
					});
					return;
				}
				// ...此处省略，这里需要调用后台发送验证码
				uni.request({
					url: "",
					method: "POST",
					data: {
						email: that.email
					},
					success() {
						uni.showToast({
							title: '验证码已发送！',
							icon: 'none'
						});
					},
					fail() {
						uni.showToast({
							title: '验证码发送失败！',
							icon: 'none'
						})
					}
				})
			},
			// 当前注册按钮操作
			register() {
				var that = this;
				if (!that.email) {
					uni.showToast({
						title: '请输入邮箱号',
						icon: 'none'
					});
					return;
				}
				if (!that.verificationCode) {
					uni.showToast({
						title: '请输入验证码',
						icon: 'none'
					});
					return;
				}
				if (!that.password) {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					});
					return;
				}
				// ...此处省略，这里需要调用后台验证验证码和注册用户
				uni.request({
					url: "",
					method: "POST",
					data: {
						email: that.email,
						verificationCode: that.verificationCode,
						password: that.password
					},
					success() {
						uni.showToast({
							title: '注册成功！',
							icon: 'none'
						});
						uni.navigateTo({
							url: '/pages/login/login'
						});
					},
					fail() {
						uni.showToast({
							title: '注册失败！',
							icon: 'none'
						})
					}
				})
			},
			navigateToLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				});
			}
		}
	};
</script>

<style>
	/* register.vue (style) */
	img.a {
  position: absolute;
  width: 100%;
  top: -150rpx;
  right: 0;
}

.img-b {
  position: absolute;
  width: 50%;
  bottom: 0;
  left: -50rpx;
}

.t-login {
  width: 650rpx;
  margin: 0 auto;
  font-size: 28rpx;
  color: #000;
}

.t-login button {
  font-size: 28rpx;
  background: #5677fc;
  color: #fff;
  height: 90rpx;
  line-height: 90rpx;
  border-radius: 50rpx;
  box-shadow: 0 5px 7px 0 rgba(86, 119, 252, 0.2);
}

.t-login input {
  padding: 0 20rpx 0 120rpx;
  height: 90rpx;
  line-height: 90rpx;
  margin-bottom: 50rpx;
  background: #f8f7fc;
  border: 1px solid #e9e9e9;
  font-size: 28rpx;
  border-radius: 50rpx;
}

.t-login .t-a {
  position: relative;
}

.t-login .t-a image {
  width: 40rpx;
  height: 40rpx;
  position: absolute;
  left: 40rpx;
  top: 28rpx;
  margin-right: 20rpx;
}

.t-login .t-a .line {
  width: 2rpx;
  height: 40rpx;
  background-color: #dedede;
  position: absolute;
  top: 28rpx;
  left: 98rpx;
}

.t-login .t-b {
  text-align: left;
  font-size: 46rpx;
  color: #000;
  padding: 300rpx 0 30rpx 0;
  font-weight: bold;
}

.t-login .t-b2 {
  text-align: left;
  font-size: 32rpx;
  color: #aaaaaa;
  padding: 0rpx 0 120rpx 0;
}

.t-login .t-f {
  text-align: center;
  margin: 200rpx 0 0 0;
  color: #666;
}

.t-login .t-f text {
  margin-left: 20rpx;
  color: #aaaaaa;
  font-size: 27rpx;
}
</style>