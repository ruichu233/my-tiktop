<template>
	<view class="chat-container">
		<view class="chat-header">
			<text class="chat-title">聊天室</text>
		</view>
		<view class="chat-messages">
			<view class="message" v-for="(msg, index) in messages" :key="index">
				<view class="avatar" :class="{'self': msg.self}">
					<image :src="msg.avatar" mode="aspectFit"></image>
				</view>
				<view class="message-content">
					<view class="message-header">
						<text class="nickname">{{ msg.nickname }}</text>
					</view>
					<text class="message-text">{{ msg.text }}</text>
				</view>
			</view>
		</view>
		<view class="chat-footer">
			<input type="text" placeholder="输入消息..." v-model="inputMessage" @confirm="sendMessage" />
			<button @click="sendMessage">发送</button>
		</view>
	</view>
</template>

<script>
	import WebSocketInstance from "@/utils/websocket";

	export default {
		data() {
			return {
				inputMessage: '',
				messages: [],
				otherUserID:'',
				userId:'',
				myInfo:null,
				otherInfo:null,
			};
		},
		onLoad(options) {
			this.otherUserID = options.otherUserID;
			this.userId = uni.getStorageSync("userId")
			console.log(this.userId)
			this.connectWebSocket();
			this.getUserInfo()
		},
		methods: {
			connectWebSocket() {
				const url = "ws://127.0.0.1:8080/v1/ws/chat/connect/"+this.userId; // 替换为你的WebSocket服务器地址
				WebSocketInstance.connect(url);
				WebSocketInstance.addListener("open", () => {
					console.log("WebSocket 连接已打开");
				});
				WebSocketInstance.addListener("message", (rawData) => {
					console.log("原始数据:", rawData);
					
					console.log("  adad:", this.otherInfo);
					
					try {						
						this.messages.push({
							nickname: this.otherInfo.name,
							text: rawData.message.content,
							avatar: this.otherInfo.avatar,
							self: false
						});
						console.log("消息已添加到 messages 数组",this.messages);
					} catch (error) {
						console.error("消息处理错误:", error);
					}
				});
				WebSocketInstance.addListener("close", () => {
					console.log("WebSocket 连接已关闭");
				});
				WebSocketInstance.addListener("error", (error) => {
					console.error("WebSocket 错误", error);
				});
			},
			sendMessage() {
				if (this.inputMessage.trim() !== '') {
					const message = {
						nickname: this.myInfo.name, // 假设发送消息的用户昵称
						text: this.inputMessage,
						avatar: this.myInfo.avatar, // 假设发送消息的用户头像
						self: true
					};
					let otherIdNumber = parseInt(this.otherUserID);  // 使用 parseInt 将字符串转换为数字
					const sendMessage ={
						type:"message",
						receiver_id:otherIdNumber,
						content:this.inputMessage,
					}
					this.messages.push(message);
					WebSocketInstance.sendMessage(sendMessage);
					this.inputMessage = '';
				}
			},
			getUserInfo(){
				// 使用箭头函数保持 this 的指向
				uni.request({
					url:"http://127.0.0.1:8080/v1/user/" + this.userId,
					success: (res) => {
						this.myInfo = res.data.data
					}
				})
				
				uni.request({
					url:"http://127.0.0.1:8080/v1/user/" + this.otherUserID,
					success: (res) => {
						this.otherInfo = res.data.data
					}
				})
			}
		}
	};
</script>

<style>
	.chat-container {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.chat-header {
		background-color: #f8f8f8;
		padding: 10px;
		text-align: center;
	}

	.chat-title {
		font-size: 18px;
		font-weight: bold;
	}

	.chat-messages {
		flex: 1;
		padding: 10px;
		overflow-y: auto;
	}

	.message {
		display: flex;
		margin-bottom: 10px;
	}

	.avatar {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 10px;
	}

	.self {
		margin-left: auto;
		margin-right: 0;
	}

	.message-content {
		max-width: 70%;
		padding: 10px;
		border-radius: 5px;
		background-color: #e0e0e0;
		display: flex;
		flex-direction: column;
	}

	.self .message-content {
		background-color: #007aff;
		color: white;
	}

	.message-header {
		font-weight: bold;
		margin-bottom: 5px;
	}

	.message-text {
		color: #333;
	}

	.chat-footer {
		display: flex;
		padding: 10px;
		background-color: #f8f8f8;
	}

	input {
		flex: 1;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		margin-right: 10px;
	}

	button {
		padding: 10px 20px;
		background-color: #007aff;
		color: white;
		border: none;
		border-radius: 5px;
	}
</style>