<template>
	<view class="friends-container" @scroll="onScroll" :style="{ height: containerHeight + 'px' }">
		<!-- 顶部导航栏 -->
		<view class="header">
			<text class="header-title">我的好友</text>
		</view>

		<!-- 好友列表 -->
		<view v-for="friend in friends" :key="friend.id" class="friend-item">
			<view class="friend-avatar-container">
				<image :src="friend.avatar" class="friend-avatar" />
			</view>
			<view class="friend-info">
				<text class="friend-name">{{ friend.username }}</text>
			</view>
		</view>

		<!-- 上拉加载提示 -->
		<view v-if="isLoading" class="loading-text">加载中...</view>
		<view v-if="!hasMore && !isLoading" class="loading-text">没有更多了</view>
		<tab></tab>
	</view>
</template>

<script>
	import tab from '../../components/tab.vue'
	export default {
		data() {
			return {
				friends: [], // 好友列表
				page: 1, // 当前页
				hasMore: true, // 是否还有更多
				isLoading: false, // 是否正在加载
				containerHeight: 0, // 设置容器的高度
			};
		},
		components: {
			tab
		},
		methods: {
			// 模拟加载朋友列表
			loadFriends() {
				if (this.isLoading) return; // 避免重复加载

				this.isLoading = true; // 设置为正在加载
				const newFriends = [{
						id: this.page * 3 - 2,
						avatar: 'https://www.bing.com/th?id=OIP.4dZ2QcbWcKQHGGb1lDQkFwHaFS&pid=Api', // 头像图片 URL
						username: 'User' + (this.page * 3 - 2),
					},
					{
						id: this.page * 3 - 1,
						avatar: 'https://www.bing.com/th?id=OIP.4dZ2QcbWcKQHGGb1lDQkFwHaFS&pid=Api',
						username: 'User' + (this.page * 3 - 1),
					},
					{
						id: this.page * 3,
						avatar: 'https://www.bing.com/th?id=OIP.4dZ2QcbWcKQHGGb1lDQkFwHaFS&pid=Api',
						username: 'User' + (this.page * 3),
					},
				];

				// 假设获取的数据
				this.friends = [...this.friends, ...newFriends];

				// 判断是否有更多数据
				this.hasMore = this.page < 3; // 假设一共只有3页
				this.isLoading = false; // 加载完毕
			},

			// 滚动监听
			onScroll(event) {
				const scrollTop = event.detail.scrollTop; // 获取当前滚动的距离
				const scrollHeight = event.detail.scrollHeight; // 获取页面总高度
				const clientHeight = event.detail.clientHeight; // 获取可见区域的高度

				// 当滚动到底部时触发加载更多
				if (scrollTop + clientHeight >= scrollHeight - 50 && this.hasMore && !this.isLoading) {
					this.page += 1;
					this.loadFriends(); // 加载更多
				}
			},
		},
		mounted() {
			this.loadFriends(); // 初始化加载第一页数据
			// 设置容器的高度（考虑状态栏和底部导航栏等）
			this.containerHeight = uni.getSystemInfoSync().windowHeight;
		},
	};
</script>

<style scoped>
	.friends-container {
		padding: 10px;
		background-color: #000;
		/* 黑色背景 */
		color: #fff;
		/* 白色字体 */
		overflow-y: scroll;
	}

	.header {
		background-color: #000;
		/* 黑色背景 */
		padding: 20px;
		text-align: center;
		border-bottom: 1px solid #444;
		/* 底部分隔线 */
	}

	.header-title {
		font-size: 20px;
		font-weight: bold;
		color: #fff;
		/* 白色字体 */
	}

	.friend-item {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
		padding: 10px;
		border-bottom: 1px solid #444;
		/* 浅灰色分隔线 */
		background-color: #222;
		/* 深灰色背景，避免和黑色背景融为一体 */
	}

	.friend-avatar-container {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 10px;
	}

	.friend-avatar {
		width: 100%;
		height: 100%;
	}

	.friend-info {
		flex-grow: 1;
	}

	.friend-name {
		font-size: 16px;
		font-weight: bold;
		color: #fff;
		/* 白色字体 */
	}

	.loading-text {
		text-align: center;
		color: #bbb;
		padding: 10px;
	}

	button.load-more-btn {
		width: 100%;
		padding: 10px;
		background-color: #0081FF;
		/* 蓝色按钮背景 */
		border: none;
		margin-top: 20px;
		text-align: center;
		color: #fff;
		/* 白色文字 */
		font-size: 14px;
		border-radius: 5px;
	}
</style>