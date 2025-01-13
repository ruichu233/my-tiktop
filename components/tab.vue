<template>
	<view class="tab">
		<navigator open-type="switchTab" url="/pages/index/index" class="tab-box">
			首页
		</navigator>
		<navigator open-type="switchTab" url="/pages/city/city" class="tab-box">
			同城
		</navigator>

		<view class="tab-box">
			<view class="iconfont iconjiahao icon-box" @click="goToPage">
			</view>
		</view>
		<navigator open-type="switchTab" url="/pages/news/news" class="tab-box">
			消息
		</navigator>
		<navigator open-type="switchTab" url="/pages/personal/personal" class="tab-box">
			我
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
		    // 点击事件处理函数
		    goToPage() {
			  console.log("跳转")
		      uni.navigateTo({
		        url:"/pages/uploadVideo/uploadVideo",
				success:function(){
					console.log("succ")
				},
				fail:function(){
					console.log("fail")
				}
		      });
		    },
		  }
	}
</script>

<style>
	.tab {
		height: 100rpx;
		background-color: #000000;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 20;
	}

	.tab-box {
		float: left;
		width: 20%;
		color: #FFFFFF;
		text-align: center;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 35rpx
	}

	.icon-box {
		width: 60%;
		height: 60rpx;
		background: #FFFFFF;
		color: #000000;
		margin: 20rpx 20%;
		line-height: 60rpx;
		border-radius: 10rpx;
		font-size: 30rpx;
	}
</style>