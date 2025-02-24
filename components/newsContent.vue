<template>
	<view class="newsContent">
		<!-- 会话列表 -->
		<view class="newsList">
			<view class="item" v-for="item in conversations" :key="item.id" @click="goToChat(item.otherUserID)">
				<view class="author-img-box">
					<image class="author-img" :src="item.avatar" mode=""></image>
				</view>
				<view class="text">
					<view class="top">
						<view class="name">
							{{item.name}}
						</view>
						<view class="time">
							{{item.lastMessageTime}}
						</view>
					</view>
					<view class="content">
						{{item.lastMessage}}
					</view>
				</view>
			</view>
			<view class="bot-box">
				<view class="more" v-if="conversations.length === 0">
					暂无消息
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				conversations: [{
						id: 1,
						name: "张三",
						avatar: "../static/img/author.jpg",
						lastMessage: "你好，我是张三。我特别爱吃！！！",
						lastMessageTime: "8-1",
						otherUserID: "647125233569861"
					},
					{
						id: 2,
						name: "李四",
						avatar: "../static/img/author.jpg",
						lastMessage: "你好，我是李四。我特别爱睡觉！！！",
						lastMessageTime: "8-2",
						otherUserID: "647125233569861"
					},
					{
						id: 3,
						name: "王二麻",
						avatar: "../static/img/author.jpg",
						lastMessage: "你好，我是王二麻。我特别爱购物！！！",
						lastMessageTime: "8-1",
						otherUserID: "647125233569861"
					},
					// 这里可以加入更多的会话数据
				]
			};
		},
		methods: {
			// 点击进入聊天页面
			goToChat(otherUserID) {
				uni.navigateTo({
					url: `/pages/chat/chat?otherUserID=${otherUserID}`
				});
			}
		}
	};
</script>

<style scoped>
	.newsContent {
		width: 100%;
		background: #000000;
	}

	.newsList {
		background: #000000;
	}

	.item {
		height: 120rpx;
		padding: 30rpx 20rpx;
	}

	.author-img-box {
		float: left;
		margin-left: 20rpx;
	}

	.author-img {
		width: 90rpx;
		height: 90rpx;
		border-radius: 50%;
	}

	.text {
		float: left;
		margin-left: 30rpx;
		height: 30rpx;
		width: 75%;
		color: #FFFFFF;
	}

	.top {
		height: 50rpx;
		line-height: 50rpx;
	}

	.name {
		float: left;
		font-size: 36rpx;
	}

	.time {
		float: right;
		font-size: 22rpx;
		color: #AAAAAA;
	}

	.content {
		height: 50rpx;
		line-height: 50rpx;
		font-size: 26rpx;
		color: #AAAAAA;
	}

	.bot-box {
		height: 200rpx;
		width: 100%;
	}

	.more {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 24rpx;
		color: #AAAAAA;
		text-align: center;
	}
</style>