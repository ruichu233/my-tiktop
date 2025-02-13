<template>
	<view class="personaldata">
		<view class="box-bg">
			<uni-nav-bar dark color="#0c34ba" fixed :border="false" backgroundColor="#ffffff" shadow left-icon="left"
				leftText="返回" @clickLeft="goto" title="个人资料" />
		</view>
		<view class="box"></view>
		<view class="list-personal" v-for="(item,index) in alldata">
			<view class="chat-item">
				<view class="chat-content">
					<text class="title">头像</text>
				</view>
				<image class="chat-avatar" :src="item.userImg" mode="aspectFit" @click="uploadAvatar"></image>
				<!-- 删除: <view class="edit-icon" @click="editAvatar">
					<uni-icons type="compose" size="24" color="#c8c9cc"></uni-icons>
				</view> -->
			</view>
			<view class="separator"></view>
			<view class="chat-item">
				<view class="chat-content">
					<text class="title">用户id</text>
				</view>
				<text class="information">{{item.userId}}</text>
			</view>
			<view class="separator"></view>
			<view class="chat-item">
				<view class="chat-content" @click="editNickName">
					<text class="title">昵称</text>
				</view>
				<text class="information">{{alldata[0].nickName ||'Allen'}}</text>
			</view>
			<view class="separator"></view>
			<view class="chat-item">
				<view class="chat-content" @click="editDesc">
					<text class="title">简介</text>
				</view>
				<text class="information">{{alldata[0].desc ||'这家伙很懒，什么都没有留下！'}}</text>
			</view>
			<view class="separator"></view>
			<view class="chat-item">
				<view class="chat-content">
					<button class="edit-button" @click="editPassword">修改密码</button>
				</view>
			</view>
		</view>
		<uni-popup ref="popupNick" type="bottom" border-radius="10px 10px 0 0">
			<view class="register-box">
				<view class="title-x">
					<view class="title">修改昵称</view>
					<uni-icons @click="back" type="closeempty" size="24" color="#c8c9cc"></uni-icons>
				</view>
				<view class="from1">
					<uv-form labelPosition="left" ref="form">
						<uv-form-item label="昵称" labelWidth="80px" prop="userInfo.phone" borderBottom>
							<uv-input v-model="newNickName" placeholder="输入新昵称" border="none">
							</uv-input>
						</uv-form-item>
					</uv-form>
				</view>
				<view class="register1-btn" @click="confirmEdit('popupNick')">保存</view>
			</view>
		</uni-popup>
		<uni-popup ref="popupDesc" type="bottom" border-radius="10px 10px 0 0">
			<view class="register-box">
				<view class="title-x">
					<view class="title">修改简介</view>
					<uni-icons @click="back" type="closeempty" size="24" color="#c8c9cc"></uni-icons>
				</view>
				<view class="from1">
					<uv-form labelPosition="left" ref="form">
						<uv-form-item label="简介" labelWidth="80px" prop="userInfo.phone" borderBottom>
							<uv-input v-model="newDesc" placeholder="输入新简介" border="none">
							</uv-input>
						</uv-form-item>
					</uv-form>
				</view>
				<view class="register1-btn" @click="confirmEdit('popupDesc')">保存</view>
			</view>
		</uni-popup>
		<uni-popup ref="popupAvatar" type="bottom" border-radius="10px 10px 0 0">
			<view class="register-box">
				<view class="title-x">
					<view class="title">修改头像</view>
					<uni-icons @click="back" type="closeempty" size="24" color="#c8c9cc"></uni-icons>
				</view>
				<view class="from1">
					<uv-form labelPosition="left" ref="form">
						<uv-form-item label="头像" labelWidth="80px" prop="userInfo.phone" borderBottom>
							<uv-input v-model="newAvatar" placeholder="输入新头像URL" border="none" disabled></uv-input>
						</uv-form-item>
					</uv-form>
				</view>
				<view class="register1-btn" @click="confirmEdit('popupAvatar')">保存</view>
			</view>
		</uni-popup>
		<uni-popup ref="popupPassword" type="bottom" border-radius="10px 10px 0 0">
			<view class="register-box">
				<view class="title-x">
					<view class="title">修改密码</view>
					<uni-icons @click="back" type="closeempty" size="24" color="#c8c9cc"></uni-icons>
				</view>
				<view class="from1">
					<uv-form labelPosition="left" ref="form">
						<uv-form-item label="旧密码" labelWidth="80px" prop="oldPassword" borderBottom>
							<uv-input v-model="oldPassword" placeholder="输入旧密码" type="password" border="none">
							</uv-input>
						</uv-form-item>
						<uv-form-item label="新密码" labelWidth="80px" prop="newPassword" borderBottom>
							<uv-input v-model="newPassword" placeholder="输入新密码" type="password" border="none">
							</uv-input>
						</uv-form-item>
						<uv-form-item label="确认密码" labelWidth="80px" prop="confirmPassword" borderBottom>
							<uv-input v-model="confirmPassword" placeholder="确认新密码" type="password" border="none">
							</uv-input>
						</uv-form-item>
					</uv-form>
				</view>
				<view class="register1-btn" @click="confirmEdit('popupPassword')">保存</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				token: '',
				alldata: [],
				newNickName: '',
				newDesc: '',
				newAvatar: '',
				oldPassword: '',
				newPassword: '',
				confirmPassword: '',
				uploadUrl: "",
			}
		},
		// 放在 onShow 中，因为它会在页面每次出现时被触发
		onShow() {
			//获取token值
			this.token = uni.getStorageSync('access-token');
			//首先判断用户是否登录 token是否存在 如果存在可以继续下一步
			//如果不存在 让他跳转到登录页面
			if (this.token == '') {
				uni.navigateTo({
					url: "/pages/login/login"
				})
				return //终止后面代码的运行
			}
			this.getpersonaldata();
		},
		methods: {
			handleClose() {
				// 确保关闭方法在适当的时候调用
				this.$refs.myPopup.close();
			},
			confirmEdit(refName) {
				if (refName === 'popupNick') {
					this.updateNickName();
				} else if (refName === 'popupDesc') {
					this.updateDesc();
				} else if (refName === 'popupAvatar') {
					this.updateAvatar();
				} else if (refName === 'popupPassword') {
					this.updatePassword();
				}
			},
			// 弹出编辑昵称窗口并清空输入框
			editNickName() {
				this.newNickName = this.alldata[0].nickName;
				this.$refs.popupNick.open();
			},

			// 弹出编辑简介窗口并清空输入框
			editDesc() {
				this.newDesc = this.alldata[0].desc;
				this.$refs.popupDesc.open();
			},

			// 弹出编辑头像窗口并清空输入框
			// 	this.newAvatar = this.alldata[0].userImg;
			// 	this.$refs.popupAvatar.open();
			// },

			// 弹出编辑密码窗口并清空输入框
			editPassword() {
				this.oldPassword = '';
				this.newPassword = '';
				this.confirmPassword = '';
				this.$refs.popupPassword.open();
			},

			// 提交昵称修改
			updateNickName() {
				let user_id = uni.getStorageSync("userId")
				uni.request({
					url: 'http://127.0.0.1:8080/v1/user/' + user_id + '/update',
					method: 'POST',
					header: {
						'access-token': uni.getStorageSync("access-token")
					},
					data: {
						name: this.newNickName,
						signature: "",
						avatar: "",
						old_password: "",
						password: ""
					},
					// ...配置项...
					success: (res) => {
						if (res.data.status === "更新成功") {
							this.alldata[0].nickName = this.newNickName; // 更新昵称
							this.$refs.popupNick.close(); // 关闭弹出层
						} else {
							uni.showToast({
								title: res.data.msg || '修改失败',
								icon: 'none'
							});
						}
					}
				});
			},

			// 提交简介修改
			updateDesc() {
				let user_id = uni.getStorageSync("userId")
				uni.request({
					url: 'http://127.0.0.1:8080/v1/user/' + user_id + '/update',
					method: 'POST',
					header: {
						'access-token': uni.getStorageSync("access-token")
					},
					data: {
						name: "",
						signature: this.newDesc,
						avatar: "",
						old_password: "",
						password: ""
					},
					// ...配置项...
					success: (res) => {
						if (res.data.status === "更新成功") {
							this.alldata[0].desc = this.newDesc; // 更新简介
							this.$refs.popupDesc.close(); // 关闭弹出层
						} else {
							uni.showToast({
								title: res.data.msg || '修改失败',
								icon: 'none'
							});
						}
					}
				});
			},

			// 提交头像修改
			updateAvatar() {
				let user_id = uni.getStorageSync("userId")
				uni.request({
					url: 'http://127.0.0.1:8080/v1/user/' + user_id + '/update',
					method: 'POST',
					header: {
						'access-token': uni.getStorageSync("access-token")
					},
					data: {
						name: "",
						signature: "",
						avatar: this.newAvatar,
						old_password: "",
						password: ""
					},
					// ...配置项...
					success: (res) => {
						if (res.data.status === "更新成功") {
							this.alldata[0].userImg = this.newAvatar; // 更新头像
							this.$refs.popupAvatar.close(); // 关闭弹出层
						} else {
							uni.showToast({
								title: res.data.msg || '修改失败',
								icon: 'none'
							});
						}
					}
				});
			},

			// 提交密码修改
			updatePassword() {
				let user_id = uni.getStorageSync("userId")
				if (this.newPassword !== this.confirmPassword) {
					uni.showToast({
						title: '新密码和确认密码不一致',
						icon: 'none'
					});
					return;
				}
				uni.request({
					url: 'http://127.0.0.1:8080/v1/user/' + user_id + '/update',
					method: 'POST',
					header: {
						'access-token': uni.getStorageSync("access-token")
					},
					data: {
						name: "",
						signature: "",
						avatar: "",
						old_password: this.oldPassword,
						password: this.newPassword
					},
					// ...配置项...
					success: (res) => {
						if (res.data.status === "更新成功") {
							uni.showToast({
								title: '密码修改成功',
								icon: 'success'
							});
							this.$refs.popupPassword.close(); // 关闭弹出层
						} else {
							uni.showToast({
								title: res.data.msg || '修改失败',
								icon: 'none'
							});
						}
					}
				});
			},

			//获取个人信息的数据
			getpersonaldata() {
				let userId = uni.getStorageSync("userId")
				uni.request({
					url: 'http://127.0.0.1:8080/v1/user/' + userId,
					method: 'GET',
					header: {
						'access-token': uni.getStorageSync("access-token")
					},
					success: (res) => {
						let userInfo = {
							userId: res.data.data.user_id,
							userImg: res.data.data.avatar,
							nickName: res.data.data.name,
							email: res.data.data.email,
							desc: res.data.data.signature,
						}
						this.alldata = [...this.alldata, userInfo]
					}
				})
				// uni.request({
				// 	url: '替换为自己的url地址值', //仅为示例，并非真实接口地址。
				// 	data: {
				// 		appkey: '替换为自己的appkey值',
				// 		tokenString: this.token
				// 	},
				// 	success: (res) => {
				// 		// 在这里打印从后端返回的数据
				// 		console.log('返回的数据:', res);
				// 		this.alldata = res.data.result;
				// 	},
				// 	fail: (err) => {
				// 		// 在请求失败时打印错误信息
				// 		console.error('请求失败:', err);
				// 	}
				// });
			},
			back() {
				uni.navigateTo({
					url: "/pages/personal/personal"
				})
			},
			goto() {
				uni.switchTab({
					url: "/pages/personal/personal"
				});
			},

			// 新增: 上传头像的方法
			uploadAvatar() {
				uni.chooseImage({
					count: 1, // 默认9
					sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					success: (res) => {
						const tempFilePaths = res.tempFilePaths;
						console.log(tempFilePaths)
						this.getAvatarUrl(tempFilePaths)

					}
				});
			},
			// 获取上传头像链接
			getAvatarUrl(tempFilePaths) {
				let userId = uni.getStorageSync("userId")
				uni.request({
					url: 'http://127.0.0.1:8080/v1/user/' + userId + '/avatar',
					method: 'GET',
					header: {
						'access-token': uni.getStorageSync("access-token")
					},
					success: (res) => {
						this.uploadUrl = res.data.avatar_url
						this.newAvatar = this.uploadUrl.split("?")[0];
						this.readFile(tempFilePaths[0])
						// this.uploadAvatar1(tempFilePaths[0])
						this.$refs.popupAvatar.open();
					}
				})
			},
			// 上传头像
			uploadAvatar1(Data) {
				//const fileData = uni.getFileSystemManager().readFileSync(coverSrc);
				// console.log(coverSrc)
				// this.readFile(coverSrc)
				const [coverErr, coverUploadResult] =  uni.request({
					url: this.uploadUrl,
					method: 'PUT',
					data: Data,
					header: {
						'Content-Type': 'application/octet-stream',
					}
				});
			},
			// 获取本地数据
			// 使用 FileReader 读取文件
			readFile(filePath) {
			    const xhr = new XMLHttpRequest();
			    xhr.open('GET', filePath, true);
			    xhr.responseType = 'blob';
			    xhr.onload = () => {
			        if (xhr.status === 200) {
			            const blob = xhr.response;
			            const reader = new FileReader();
			            reader.readAsArrayBuffer(blob);
			
			            // 读取完成后的回调
			            reader.onload = (e) => {
			                this.fileData = e.target.result; // 存储文件内容
			                console.log('File data:', this.fileData); // 打印文件数据
							this.uploadAvatar1(this.fileData)
			            };
			
			            // 错误回调
			            reader.onerror = (e) => {
			                console.error('File reading failed:', e);
			            };
			        }
			    };
			    xhr.send();
			}


		}
	}
</script>

<style lang="scss">
	$nav-height: 30px;

	.personaldata {

		flex-direction: column;


		.box-bg {
			background-color: #F5F5F5;

			/deep/ .uni-nav-bar-text {
				color: black !important;
				font-size: 32rpx;
			}

		}

		.box {
			height: 200rpx;
			background: #0c34ba;
		}

		.list-personal {

			height: 450rpx;
			flex-direction: column;
			margin: 20rpx;
			flex: 1;
			border-radius: 20rpx 20rpx 0 0;
			margin-top: -50rpx;
			background: white;
			display: flex;
			flex-direction: column;
			box-shadow: 0 10rpx 20rpx rgba(0, 0, 0, 0.1);

			.chat-item {
				display: flex;
				align-items: center;
				padding: 20rpx 20rpx;
				/* 调整内边距 */

				.edit-button {
					background-color: #0c34ba;
					color: white;
					border: none;
					padding: 10rpx 20rpx;
					border-radius: 10rpx;
					font-size: 28rpx;
				}
			}

			.separator {
				height: 1rpx;
				width: 90%;
				background-color: #f5f6f7;
				margin-top: 10rpx;
				margin-left: 30rpx;
			}

			.chat-content {
				flex: 1;
				margin-right: 20rpx;
				/* 头像与内容的间隔 */
			}

			.title {
				font-size: 28rpx;
				/* 标题字号 */
				color: #333;
				/* 标题颜色 */
			}

			.chat-avatar {
				width: 80rpx;
				/* 头像宽度 */
				height: 80rpx;
				/* 头像高度 */
				border-radius: 50%;
				/* 如果需要圆形头像 */
				margin-left: auto;
				/* 使头像靠右 */
			}

			.information {
				color: #969799;
				font-size: 26rpx;
			}

			.edit-icon {
				margin-left: 20rpx;
			}

		}

		.register-box {
			height: 600rpx;
			background: white;
			padding: 30rpx;

			.title-x {
				display: flex;
				justify-content: space-between;
			}

			.title {
				color: #646566;
				font-weight: 600;
				font-size: 52rpx;
			}

			.from1 {
				margin-top: 70rpx;
			}

			.register1-btn {
				height: 90rpx;
				font-size: 30rpx;
				text-align: center;
				line-height: 90rpx;
				color: white;
				border-radius: 50rpx;
				margin-top: 100rpx !important;
				margin: 0 10rpx;
				background: #1441cc;
			}
		}


	}
</style>