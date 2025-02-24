<template>
	<view class="videoList">
		<view class="swiper-box">
			<swiper class="swiper" :vertical="true" @change="change" @touchstart="touchStart" @touchend="touchEnd">
				<swiper-item v-for="(item,index) of videos" :key="item.id">
					<view class="swiper-item" style="color:#000000">
						<videoPlayer @changeClick="changeClick" ref="player" :video="item" :index="index">
						</videoPlayer>
					</view>
					<view class="left-box">
						<listLeft :item="item"></listLeft>
					</view>
					<view class="right-box">
						<listRight @open="openComment(item.video_id)" @star="like(item.video_id)" :item="item" ref="right"></listRight>
					</view>
					<view v-show="show" class="comment-box">
						<zwz-comment :comments="comments" @comment-like="commentLike" @send-comment="commentSend" v-model="value"
							@lower="lower" @reply="reply" @close="close" :objId="item.video_id" :authorId="item.author_id"></zwz-comment>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	import videoPlayer from './videoPlayer.vue'
	import listLeft from './listLeft.vue'
	import listRight from './listRight.vue'
	import comment from './comment.vue'
	var time = null
	export default {
		props: ['list'],
		components: {
			videoPlayer,
			listLeft,
			listRight,
			comment,
		},
		data() {
			return {
				videos: [],
				pageStartY: 0,
				pageEndY: 0,
				page: 0,
				show: false,
				value: "",
				comments: []
			}

		},
		watch: {
			list() {
				this.videos = this.list
			}
		},
		methods: {
			changeClick() {
				this.$refs.right[0].change()
				// this.
			},
			change(res) {
				clearTimeout(time)
				this.page = res.detail.current
				time = setTimeout(() => {
					if (this.pageStartY < this.pageEndY) {
						this.$refs.player[this.page].player()
						this.$refs.player[this.page + 1].pause()
						this.pageStartY = 0
						this.pageEndY = 0
					} else {
						this.$refs.player[this.page].player()
						this.$refs.player[this.page - 1].pause()
						this.pageStartY = 0
						this.pageEndY = 0
					}
				}, 1)

			},
			touchStart(res) {
				this.pageStartY = res.changedTouches[0].pageY

			},
			touchEnd(res) {
				this.pageEndY = res.changedTouches[0].pageY

			},
			getCommentList(videoId){
				uni.request({
					url:"http://127.0.0.1:8080/v1/comment/comment-list",
					method:'POST',
					header:{
						"access-token":uni.getStorageSync("access-token")
					},
					data:{
						"video_id":videoId,
					},
					success: (res) => {
						console.log(res.data)
						this.comments = res.data.comment_list
					}
				})
			},
			openComment(videoId) {
				if (this.show === false) {
					this.show = true
				}
				this.getCommentList(videoId);
			},
			close() {
				if (this.show === true) {
					this.show = false
				}
			},
			commentLike(e) {
				console.log('返回点击的评论信息', e);
			},
			commentSend(superCommentId,video_id,beReplayUserId) {
				console.log(superCommentId,video_id,beReplayUserId)
				uni.request({
					url:"http://127.0.0.1:8080/v1/comment/commment-publish",
					method:'POST',
					header:{
						"access-token":uni.getStorageSync("access-token")
						},
					data:{
						"video_id":video_id,
						"content":this.value,
						"superCommentId":superCommentId,
						"beReplayUserId":beReplayUserId
					},
					success: (res) => {
						this.getCommentList(video_id)
					},
				});
				this.value = '';
			},
			lower() {
				console.log('到底了');
			},
			reply(index, id, userNickName, reply) {
				console.log(index, id, userNickName, reply);
				// index: 回复的顶级评论的索引
				// id： 回复的顶级评论的id
				// ueserNickName: 上级评论的用户名
				// reply： 回复评论的全部信息
			},
			like(id){
				uni.request({
					url:"http://127.0.0.1:8080/v1/comment/commment-publish",
					method:'POST',
					header:{
						"access-token":uni.getStorageSync("access-token")
						},
					data:{
						"video_id":video_id,
						"content":this.value,
						"superCommentId":superCommentId,
						"beReplayUserId":beReplayUserId
					},
					success: (res) => {
						this.getCommentList(video_id)
					},
				})
			}
		}
	}
</script>

<style style lang="scss" scoped>
	.videoList {
		height: 100%;
		width: 100%;
	}

	.swiper-box {
		height: 100%;
		width: 100%;
	}

	.swiper {
		height: 100%;
		width: 100%;
	}

	.swiper-item {
		height: 100%;
		width: 100%;
	}

	.left-box {
		z-index: 20;
		position: absolute;
		bottom: 125rpx;
		left: 20rpx;
	}

	.right-box {
		z-index: 20;
		position: absolute;
		bottom: 50px;
		right: 10px;
	}

	.comment-box {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 22;
		height: 500px;
		width: 100%;
	}

	.btn {
		text-align: center;
		color: #fff;
		padding: 20rpx;
		margin: 20rpx;
		border-radius: 20rpx;
		background-color: #2979ff;
	}
</style>