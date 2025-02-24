<template>
	<view class="friends-container" @scroll="onScroll" :style="{ height: containerHeight + 'px' }">
		<!-- 顶部导航栏 -->
		<view class="header">
			<scroll-view class="nav-bar" scroll-x="true">
				<view v-for="(tab, index) in tabs" :key="index" class="nav-item"
					:class="{ active: currentTab === index }" @click="changeTab(index)">
					{{ tab.title }}
				</view>
			</scroll-view>
		</view>

		<!-- 好友列表 -->
		<view v-if="currentTab === 0" v-for="friend in friends" :key="friend.id" class="friend-item">
			<view class="friend-avatar-container">
				<image :src="friend.avatar" class="friend-avatar" />
			</view>
			<view class="friend-info">
				<text class="friend-name">{{ friend.user_name }}</text>
			</view>
		</view>

		<!-- 关注列表 -->
		<view v-if="currentTab === 1" v-for="follow in follows" :key="follow.id" class="friend-item">
			<view class="friend-avatar-container">
				<image :src="follow.avatar" class="friend-avatar" />
			</view>
			<view class="friend-info">
				<text class="friend-name">{{ follow.user_name }}</text>
			</view>
		</view>

		<!-- 粉丝列表 -->
		<view v-if="currentTab === 2" v-for="fan in fans" :key="fan.id" class="friend-item">
			<view class="friend-avatar-container">
				<image :src="fan.avatar" class="friend-avatar" />
			</view>
			<view class="friend-info">
				<text class="friend-name">{{ fan.user_name }}</text>
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
				tabs: [{
						title: '我的好友'
					},
					{
						title: '我的关注'
					},
					{
						title: '我的粉丝'
					}
				],
				currentTab: 0,
				friends: [], // 好友列表
				follows: [], // 关注列表
				fans: [], // 粉丝列表
				page: 1, // 当前页
				hasMore: true, // 是否还有更多
				isLoading: false, // 是否正在加载
				containerHeight: 0, // 设置容器的高度
				userId: null // 初始化为null
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
				this.fetchFollowList();
			},

			// 获取关注列表、粉丝列表和朋友列表
			fetchFollowList() {
				const followType = this.currentTab + 1; // 1 朋友 2 粉丝 3 关注
				const lastId = this.currentTab === 0 ? this.friends[this.friends.length - 1]?.id :
				                   this.currentTab === 1 ? this.follows[this.follows.length - 1]?.id :
				                   this.fans[this.fans.length - 1]?.id;
				uni.request({
					url: 'http://127.0.0.1:8080/v1/follow/follow-list',
					method: 'POST',
					header: {
						"access-token": uni.getStorageSync('access-token')
					},
					data: {
						"user_id": this.userId,
						"follow_type": followType,
						"cursor": 0,
						"page_size": 10,
						"last_id": Number(lastId)?Number(lastId):0,
					},
					success: (response) => {
						const data = response.data;
						switch (this.currentTab) {
							case 0:
								this.friends = [...this.friends, ...data.follow_list];
								break;
							case 1:
								this.follows = [...this.follows, ...data.follow_list];
								break;
							case 2:
								this.fans = [...this.fans, ...data.follow_list];
								break;
						}
						this.hasMore = !data.is_end;
						this.isLoading = false;
					},
					fail: (error) => {
						console.error('There was an error!', error);
						this.isLoading = false;
					}
				});
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

			// 切换标签页
			changeTab(index) {
				this.currentTab = index;
				this.page = 1;
				this.hasMore = true;
				this.isLoading = false;
				// 清空当前 tab 对应的数据
				switch (index) {
					case 0:
						this.friends = []; // 清空朋友列表
						break;
					case 1:
						this.follows = []; // 清空关注列表
						break;
					case 2:
						this.fans = []; // 清空粉丝列表
						break;
				}
				this.loadFriends();
			},
			// 点击进入聊天页面
			goToChat(otherUserID) {
				uni.navigateTo({
					url: `/pages/chat/chat?otherUserID=${otherUserID}`
				});
			}
		},
		mounted() {
			// 从localstorage获取userId并确保其为数字类型
			const userIdFromStorage = uni.getStorageSync('userId');
			this.userId = typeof userIdFromStorage === 'number' ? userIdFromStorage : parseInt(userIdFromStorage, 10);
			this.loadFriends(); // 初始化加载第一页数据
			// 设置容器的高度（考虑状态栏和底部导航栏等）
			this.containerHeight = uni.getSystemInfoSync().windowHeight-10;
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

	.nav-bar {
		display: flex;
		white-space: nowrap;
		overflow-x: auto;
		/* 确保可以水平滚动 */
		-webkit-overflow-scrolling: touch;
		/* 优化滚动效果 */
		width: 100%;
		/* 确保scroll-view占满宽度 */
	}

	.nav-item {
		display: inline-block;
		/* 保证它们是水平排列的 */
		padding: 10px 20px;
		font-size: 16px;
		color: #bbb;
		flex-shrink: 0;
		/* 防止导航项收缩 */
		white-space: nowrap;
		/* 保证内容不会换行 */
	}

	.nav-item.active {
		color: #fff;
		border-bottom: 2px solid #fff;
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