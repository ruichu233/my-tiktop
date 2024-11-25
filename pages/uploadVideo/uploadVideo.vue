<template>
	<view class="container">
		<!-- Header -->
		<view class="header">
			<text>发布视频</text>
		</view>

		<!-- 视频选择与预览 -->
		<view class="video-section" @click="chooseVideo">
			<view v-if="!videoSrc" class="video-placeholder">
				<text>点击选择或录制视频</text>
			</view>
			<video v-else :src="videoSrc" controls autoplay></video>
		</view>

		<!-- 封面选择滑块 -->
		<view v-if="videoSrc" class="cover-section">
			<text>选择封面</text>
			<slider min="0" :max="videoDuration" step="1" @change="selectCover"></slider>
			<image :src="coverImage" v-if="coverImage" class="cover-preview"></image>
		</view>

		<!-- 描述输入框 -->
		<view class="description-section">
			<textarea v-model="description" placeholder="输入视频描述..." maxlength="100"></textarea>
		</view>

		<!-- 发布按钮 -->
		<button type="primary" class="upload-button" @click="uploadVideo">发布</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				videoSrc: "", // 本地视频路径
				coverImage: "", // 封面图路径
				videoDuration: 0, // 视频时长
				description: "", // 视频描述
				videoURL: "", // 上传成功的视频 URL
				coverURL: "", // 上传成功的封面 URL
			};
		},
		methods: {
			// 选择视频文件
			async chooseVideo() {
				const res = await uni.chooseVideo({
					sourceType: ["album", "camera"],
				});
				console.log(JSON.stringify(res));
				if (res[1].tempFilePath) {
					this.videoSrc = res[1].tempFilePath;
					this.videoDuration = res[1].duration;
				}
			},

			// 选择封面时间点
			selectCover(event) {
				const timePoint = event.detail.value;

				// 使用 canvas 截取封面图
				const video = document.createElement("video");
				video.src = this.videoSrc;
				video.currentTime = timePoint;

				video.onseeked = () => {
					const canvas = document.createElement("canvas");
					canvas.width = video.videoWidth;
					canvas.height = video.videoHeight;

					const ctx = canvas.getContext("2d");
					ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

					this.coverImage = canvas.toDataURL("image/jpeg");
				};
			},

			// 上传视频
			async uploadVideo() {
				if (!this.videoSrc) {
					uni.showToast({
						title: "请选择视频",
						icon: "none"
					});
					return;
				}

				// 模拟上传视频和封面，替换为实际上传逻辑
				uni.showLoading({
					title: "上传中..."
				});
				// 向服务端请求上传链接
				try{
					uploadUrlResp = await uni.request({
						url: 'l27.0.0.1:9573',
						method:'GET',
						data:{
							
						},
						header:{
							access_token : uni.getStorage("access_token")
						}
					})
				}catch(e){
					console.log(e.message)
				}

				try {
					// 1. 上传封面图
					const coverUploadResult = await uni.uploadFile({
						url: this.coverURL,
						filePath: this.coverImage,
						name: "cover",
					});

					// 2. 上传视频文件
					const videoUploadResult = await uni.uploadFile({
						url: this.videoURL,
						filePath: this.videoSrc,
						name: "video",
						formData: {
							description: this.description,
						},
					});

					uni.showToast({
						title: "视频发布成功",
						icon: "success"
					});
				} catch (err) {
					console.error("上传失败", err);
					uni.showToast({
						title: "上传失败",
						icon: "none"
					});
				} finally {
					uni.hideLoading();
				}
			},
		},
	};

	// todo 发送请求获取上传url
</script>

<style scoped>
	.container {
		padding: 20px;
	}

	.header {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 20px;
		text-align: center;
	}

	.video-section {
		width: 100%;
		height: 250px;
		background-color: #f2f2f2;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.video-placeholder {
		color: #888;
		font-size: 16px;
	}

	.cover-section {
		margin-top: 20px;
	}

	.cover-preview {
		width: 100%;
		height: 150px;
		margin-top: 10px;
		border-radius: 8px;
	}

	.description-section {
		margin-top: 20px;
	}

	textarea {
		width: 100%;
		height: 80px;
		border-radius: 8px;
		padding: 10px;
		background-color: #f2f2f2;
	}

	.upload-button {
		margin-top: 30px;
		width: 100%;
	}
</style>