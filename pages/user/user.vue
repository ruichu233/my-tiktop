<template>
	<view class="personal">
		<view @click="click" class="iconfont iconfanhui icon-fanhui">
		</view>
		<personal-info :pages="pages" @change="change" :userInfo="userInfo"></personal-info>
		<view class="" v-show="show==='作品'">
			<personal-list :videoList="list" ></personal-list>
		</view>
		<view class="" v-show="show==='喜欢'">
			<personal-list :videoList="likes"></personal-list>
		</view>
	</view>
</template>

<script>
	import personalInfo from '../../components/personalInfo.vue'
	import personalList from '../../components/personalList.vue'
	import followList from '../../components/followList.vue'
	export default {
		components:{
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
					isFollow:false
				},
				list:[],
				likes:[],
				show:"作品",
				pages:"user"
			}
		},
		methods: {
			getVideoInfo(user_id) {
				uni.request({
					url: 'http://127.0.0.1:8080/v1/video/user/video-list',
					method:"POST",
					data: {
						"user_id": user_id
					},
					header: {
						"access-token": uni.getStorageSync("access-token")
					},
					success: (res) => {
						this.list = res.data.data.video_list
					}
				})
			},
			getLikes(user_id){
				uni.request({
					url: 'http://127.0.0.1:8080/v1/video/user/like-list',
					method:"POST",
					data: {
						"user_id": user_id
					},
					header: {
						"access-token": uni.getStorageSync("access-token")
					},
					success: (res) => {
						this.likes = res.data.data.video_list
					}
				})
			},
			change(res){
				this.show=res
			},
			click(){
				uni.navigateBack()
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
						this.userInfo.isFollow = res.data.is_follow
					}
				})
			},
			
		},
		created() {
		},
		onShow() {
			const query = this.$route.query;
			let userId = query.author_id
			let numericAuthorId = Number(userId);
			this.getUserInfo(numericAuthorId)
			this.getVideoInfo(numericAuthorId)
			this.getLikes(numericAuthorId)
		}
		
	}
</script>

<style>
.personal{
	width: 100%;
	height: 100vh;
	background: #000000;
	position:relative
}
.icon-fanhui{
	z-index: 21;
	color: #FFFFFF;
	font-size: 17px;
	position: absolute;
	top:30px;
	left:10px;
}
</style>
