<template>
	<view class="listright">
		<view class="author-img">
			<image class="img" :src="myitem.author_avatar ? myitem.author_avatar: defaultAvatar" @click="click"></image>
			<view class="iconfont iconjiahao add" v-show="show" @click="hide">
			</view>
		</view>
		<view class="iconfont iconaixin right-box" :style="color" @click="changeColor">
		</view>
		<view class="number">
			{{myitem.like_count}}
		</view>
		<view class="iconfont icontubiaozhizuo- right-box" @click="openComment">
		</view>
		<view class="number">
			{{myitem.comment_count}}
		</view>
<!-- 		<view class="iconfont iconfenxiang right-box">
		</view> -->
		<view class="around">
			<image class="img" src="../static/img/2-1.jpg" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:['item'],
		data() {
			return {
				myitem:this.item,
				show:!this.item.is_like,
				color:'',
				defaultAvatar : 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
			};
		},
		methods:{
			hide(){
				this.show=false
				// uni.request({
				// 	url:"http://127.0.0.1:8080/v1/"
				// })
			},
			changeColor(){
				this.color=this.color===''?"color:red;":''
				if (this.color != ''){
					this.myitem.like_count += 1 
				}else{
					this.myitem.like_count -= 1 
				}
				
				
			},
			change(){
				this.color="color:red;"
			},
			click(){
				uni.navigateTo({
					url:'/pages/user/user?author_id=' + this.item.author_id
				})
			},
			openComment(){
				this.$emit('open')
			}
			
		}
	}
</script>

<style>
.listright{
	width: 100rpx;
	margin: 0 auto;
}
.author-img{
	height: 100rpx;
	width:100rpx;
	border-radius: 50%;
	border:4rpx solid #FFFFFF;
	position:relative;
}
.img{
	height: 100rpx;
	width:100rpx;
	border-radius: 50%;
}
.right-box{
	width:100rpx;
	height: 100rpx;
	margin-top:25rpx ;
	text-align: center;
	line-height: 100rpx;
	color:#FFFFFF;
	font-size:66rpx;
	
}
.number{
	font-size: 20rpx;
	text-align: center;
	color: #FFFFFF;
}
.around{
	margin-top:30rpx ;
	animation:rotate 1.5s linear 0.2s infinite;
	height: 100rpx;
	width:100rpx;
}
.add{
	width: 36rpx;
	height:36rpx;
	border-radius: 50%;
	background: red;
	position:absolute;
	bottom:-18rpx;
	left:32rpx;
	text-align: center;
	line-height: 36rpx;
	color: #FFFFFF;
	font-size: 20rpx;
}



@keyframes rotate{
	0%{
		transform:rotate(0deg)
	}
	100%{
		transform:rotate(360deg)
	}
}
</style>
