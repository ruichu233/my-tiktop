<template>
	<view class="container">
		<!-- Header -->
		<view class="header">
			<text>视频发布</text>
		</view>

		<!-- 视频标题 -->
		<uni-section title="视频标题" type="line" padding>
			<uni-easyinput v-model="title" focus placeholder="输入视频标题..."></uni-easyinput>
		</uni-section>

		<!-- 视频选择与预览 -->
		<view class="video-section" @click="chooseVideo">
			<view v-if="!videoSrc" class="video-placeholder">
				<text>点击选择或录制视频</text>
			</view>
			<video v-else :src="videoSrc" controls autoplay></video>
		</view>

		<!-- 封面选择上传 -->
		<uni-section title="请选择封面" type="line" padding>
			<uni-file-picker v-model="imageValue" fileMediatype="image" limit="1" :del-icon="true" @select="select"
				auto-upload="false"></uni-file-picker>
		</uni-section>

		<!-- 描述输入框 -->
		<uni-section title="视频描述" type="line" padding>
			<uni-easyinput type="textarea" autoHeight v-model="description" placeholder="输入视频描述..."></uni-easyinput>
		</uni-section>

		<!-- 发布按钮 -->
		<button type="primary" @click="uploadVideo" class="upload-button">发布</button>
		<tab></tab>
	</view>

</template>

<script>
	import tab from '../../components/tab.vue'
	export default {
		components: {
			tab
		},
		data() {
			return {
				title: "", // 标题
				videoName: "", // 视频名称
				videoSrc: "", // 视频路径
				coverName: "", // 封面名称
				coverSrc: "", // 封面路径
				description: "", // 视频描述
				description: ""
			};
		},
		methods: {
			// 获取上传状态
			select(e) {
				this.coverSrc = e.tempFilePaths[0]
				this.coverName = e.tempFiles[0].name
				console.log('选择文件：', e)
			},
			// 返回上一页
			goBack() {
				uni.navigateBack();
			},
			// 选择视频文件
			async chooseVideo() {
				const res = await uni.chooseVideo({
					sourceType: ["album", "camera"],
				});
				console.log(JSON.stringify(res));
				if (res[1].tempFilePath) {
					this.videoSrc = res[1].tempFilePath;
				}
			}, // 使用 FileReader 读取文件
			readFile(filePath) {
				return new Promise((resolve, reject) => {
					const xhr = new XMLHttpRequest();
					xhr.open('GET', filePath, true);
					xhr.responseType = 'blob';

					xhr.onload = () => {
						if (xhr.status === 200) {
							const blob = xhr.response;
							const reader = new FileReader();

							// 使用 FileReader 读取文件内容
							reader.readAsArrayBuffer(blob);

							reader.onload = (e) => {
								// 文件读取成功，返回文件数据
								this.fileData = e.target.result; // 存储文件内容
								console.log('File data:', this.fileData); // 打印文件数据

								// 使用 resolve 返回 fileData
								resolve(this.fileData);
							};

							// 错误回调
							reader.onerror = (e) => {
								console.error('File reading failed:', e);
								reject(new Error('File reading failed'));
							};
						} else {
							reject(new Error('Failed to load file'));
						}
					};

					xhr.onerror = () => {
						reject(new Error('Failed to load file'));
					};

					xhr.send();
				});
			},
			// 发布作品
			async uploadVideo() {
				if (!this.title) {
					uni.showToast({
						title: "请输入视频标题",
						icon: "none",
					});
					return;
				}

				if (!this.videoSrc) {
					uni.showToast({
						title: "请选择视频",
						icon: "none",
					});
					return;
				}

				if (!this.coverSrc) {
					uni.showToast({
						title: "请上传封面图",
						icon: "none",
					});
					return;
				}

				uni.showLoading({
					title: "上传中...",
				});

				try {
					// Step 1: 向服务端请求上传链接
					const [err, uploadUrlResp] = await uni.request({
						url: `http://127.001:8080/v1/video/` + this.videoSrc.split("/")[3].split(".")[
							0], // 替换为实际接口地址
						method: "GET",
						data: {}, // 可传递必要的参数
						header: {
							"access-token": uni.getStorageSync("access-token")
						},
					});

					if (err || uploadUrlResp.statusCode !== 200) {
						throw new Error("获取上传链接失败");
					}

					// 从响应中提取封面和视频的上传URL
					const {
						video_url: videoUploadURL,
						cover_url: coverUploadURL
					} = uploadUrlResp.data.data;

					if (!coverUploadURL || !videoUploadURL) {
						throw new Error("获取的上传链接无效");
					}

					// Step 2: 上传封面图
					// const fileData = uni.getFileSystemManager().readFileSync(this.coverSrc);
					await this.readFile(this.coverSrc).then((fileData)=>{
						const [coverErr, coverUploadResult] =  uni.request({
							url: coverUploadURL,
							method: 'PUT',
							data: fileData,
							header: {
								'Content-Type': 'application/octet-stream',
							}
						});
						if (coverErr || coverUploadResult.statusCode !== 200) {
							throw new Error("封面图上传失败");
						}
					})
					.catch((error) => {
					    console.error('Error:', error);
					  });

					// Step 3: 上传视频文件
					// const videlData = uni.getFileSystemManager().readFileSync(this.videoSrc);
					
					await this.readFile(this.videoSrc).then((fileData)=>{
						const [videoErr, videoUploadResult] =  uni.request({
							url: videoUploadURL,
							method: 'PUT',
							data: fileData,
							header: {
								'Content-Type': 'application/octet-stream',
							}
						});
						
						if (videoErr || videoUploadResult.statusCode !== 200) {
							throw new Error("视频上传失败");
							return
						}
					})
					.catch((error) => {
					    console.error('Error:', error);
					  });

					// 成功提示
					uni.showToast({
						title: "视频发布成功",
						icon: "success",
					});
					uni.request({
						url: "http://127.0.0.1:8080/v1/video/publish",
						method: 'POST',
						data: {
							video_url: videoUploadURL.split("?")[0],
							cover_url: coverUploadURL.split("?")[0],
							title: this.title,
							description: this.description
						},
						header: {
							"access-token": uni.getStorageSync("access-token")
						}
					})
					this.goBack()
				} catch (err) {
					console.error("上传失败:", err);
					uni.showToast({
						title: err.message || "上传失败",
						icon: "none",
					});
				} finally {
					uni.hideLoading();
				}
			}
		},
	};
</script>

<style scoped>
	.container {
		padding: 80rpx;
		max-width: 600px;
		/* 设置最大宽度 */
		margin: 0 auto;
		/* 水平居中 */
	}

	.header {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 20rpx;
		text-align: center;
	}

	.video-section {
		width: 100%;
		height: 230px;
		background-color: #f2f2f2;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		/* 为加载动画设置相对定位 */
	}

	.video-section::before {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 30px;
		height: 30px;
		border-radius: 50%;
		border: 3px solid #ccc;
		border-top-color: #007aff;
		animation: loading 1s linear infinite;
		/* 添加加载动画 */
		display: none;
		/* 初始隐藏加载动画 */
	}

	.video-section.loading::before {
		display: block;
		/* 当添加loading类时显示加载动画 */
	}

	@keyframes loading {
		from {
			transform: translate(-50%, -50%) rotate(0deg);
		}

		to {
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}

	.video-placeholder {
		color: #888;
		font-size: 16px;
	}

	button {
		transition: all 0.3s ease;
		/* 添加过渡效果用于悬停时的样式变化 */
	}

	button:hover {
		background-color: #007aff;
		/* 悬停时背景颜色改变 */
		color: #fff;
		box-shadow: 0 2px 4px rgba(0, 122, 255, 0.5);
		/* 悬停时添加阴影 */
	}

	.upload-button {
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		width: 100%;
	}
</style>