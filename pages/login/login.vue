<!-- 蓝色简洁登录页面 -->
<template>
	<view class="t-login">
		<!-- 页面装饰图片 -->
		<image class="img-a" src="https://zhoukaiwen.com/img/loginImg/2.png"></image>
		<!-- <image class="img-b" src="https://zhoukaiwen.com/img/loginImg/3.png"></image> -->
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
				<input type="number" name="password" placeholder="请输入密码" v-model="password" />
			</view>
			<button @tap="login()">登 录</button>
			<view class="t-f">
				<text>还没有账号？</text>
				<text @tap="navigateToRegister" style="color: #5677fc;">立即注册</text>
			</view>
		</form>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: '欢迎回来！', //填写logo或者app名称，也可以用：欢迎回来，看您需求
				email: '', //邮箱号
				password: '' //密码
			};
		},
		onLoad() {},
		methods: {
			//当前登录按钮操作
			login() {
				var that = this;
				if (!that.email) {
					uni.showToast({
						title: '请输入邮箱号',
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
				//....此处省略，这里需要调用后台验证一下验证码是否正确，根据您的需求来
				uni.request({
					url:"http://127.0.0.1:8080/v1/email-login",
					method:"POST",
					data:{
						"email":that.email,
						"password":that.password,
					},
					success(res) {
						// 存token
						console.log(res.data.data)
						uni.setStorageSync("access-token",res.data.data.token)
						uni.setStorageSync("userId",res.data.data.user_id)
						uni.showToast({
							title: '登录成功！',
							icon: 'none'
						});
						// 跳转到首页
						uni.switchTab({
							url: '/pages/index/index'
						})
					},
					fail() {
						uni.showToast({
							title: '登录失败！',
							icon: 'none'
						})
					}
				})
				
			},
			navigateToRegister() {
				uni.navigateTo({
					url: '/pages/register/register'
				});
			}
		}
	};
</script>
<style>
	.img-a {
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
		/* margin-bottom: -200rpx; */
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
		/* border-right: 2rpx solid #dedede; */
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

	.t-login .t-c {
		position: absolute;
		right: 22rpx;
		top: 22rpx;
		background: #5677fc;
		color: #fff;
		font-size: 24rpx;
		border-radius: 50rpx;
		height: 50rpx;
		line-height: 50rpx;
		padding: 0 25rpx;
	}

	.t-login .t-d {
		text-align: center;
		color: #999;
		margin: 80rpx 0;
	}

	.t-login .t-e {
		text-align: center;
		width: 250rpx;
		margin: 80rpx auto 0;
	}

	.t-login .t-g {
		float: left;
		width: 50%;
	}

	.t-login .t-e image {
		width: 50rpx;
		height: 50rpx;
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

	.t-login .uni-input-placeholder {
		color: #000;
	}

	.cl {
		zoom: 1;
	}

	.cl:after {
		clear: both;
		display: block;
		visibility: hidden;
		height: 0;
		content: '\20';
	}
</style>