<template>
	<view class="personal">
		<personal-info @change="change" :userInfo="userInfo"></personal-info>
		<view class="" v-show="show==='作品'">
			<personal-list :videoList="list"></personal-list>
		</view>
		<view class="" v-show="show==='喜欢'">
			<personal-list :videoList="likes"></personal-list>
		</view>
		<tab></tab>
	</view>
</template>

<script>
	import tab from '../../components/tab.vue'
	import personalInfo from '../../components/personalInfo.vue'
	import personalList from '../../components/personalList.vue'
	import followList from '../../components/followList.vue'
	export default {
		components: {
			tab,
			personalInfo,
			personalList,
			followList
		},
		data() {
			return {
				userInfo: {
					userId: 0,
					avatar: "",
					name: "用户名",
					email:"3333",
					signature:"个性签名",
					follow: 0, // 关注者数量
					fans: 0, // 被关注者数量(粉丝数)
				},
				list: [],
				likes:[],
				show: "作品",
				pages: "personal",
			}
		},
		methods: {
			getVideoInfo() {
				uni.request({
					url: 'http://127.0.0.1:8080/v1/video/user/video-list',
					method:"POST",
					data: {
						"user_id": uni.getStorageSync("userId")
					},
					header: {
						"access-token": uni.getStorageSync("access-token")
					},
					success: (res) => {
						this.list = [...res.data.data.video_list]
						console.log(res.data.data.video_list)
					}
				})
			},
			getLikes(){
				uni.request({
					url: 'http://127.0.0.1:8080/v1/video/user/like-list',
					method:"POST",
					data: {
						"user_id": uni.getStorageSync("userId")
					},
					header: {
						"access-token": uni.getStorageSync("access-token")
					},
					success: (res) => {
						this.likes = [...res.data.video_list]
					}
				})
			},
			change(res) {
				this.show = res
			},
			// 获取用户信息
			getUserInfo(userId){
				uni.request({
					url: 'http://127.0.0.1:8080/v1/user/'+userId,
					method: 'GET',
					header: {
						'access-token':uni.getStorageSync("access-token")
					},
					success: (res) => {
						this.userInfo.userId = res.data.data.user_id
						this.userInfo.avatar = res.data.data.avatar
						this.userInfo.name = res.data.data.name
						this.userInfo.email = res.data.data.email
						this.userInfo.signature = res.data.data.signature
						this.userInfo.follow = res.data.data.follower_count
						this.userInfo.fans = res.data.data.followed_count
						console.log(this.userInfo)
					}
				})
			},
		},
		created() {	
		},
		onShow() {
			//判断是否登录，如果未登录则跳转到登录页面
			console.log(uni.getStorageSync("access-token"))
			if (uni.getStorageSync("access-token") == "") {
				uni.navigateTo({
					url: "/pages/login/login"
				})
			}
			let userId = uni.getStorageSync("userId")
			this.getUserInfo(userId)
			this.getVideoInfo()
			this.getLikes()
		}
	}
</script>

<style>
	.personal {
		width: 100%;
		height: 100vh;
		background: #000000;
	}
</style>