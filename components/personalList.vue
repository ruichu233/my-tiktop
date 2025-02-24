<template>
	<view>
		<view class="personalList">
			<view class="item" v-for="(item,index) in videoList" :key="item.id">
				<video 
				class="video" 
				:src="item.video_url" 
				objectFit="cover"
				loop="true"
				autoplay="true"
				muted
				:controls="false"></video>
				<view class="love-box">
					<text class="iconfont iconicon-test love-icon">12w</text>
				</view>
			</view>
		</view>
		<view class="more">
			没有更多了
		</view>
		<view class="ground">
			
		</view>
	</view>
	
</template>

<script>
export default {
	props: {
		videoList: {
			type: Array, // 确保类型是 Array
			required: true
		}
	},
	data() {
		return {
			myVideoList:this.videoList
		};
	}
}
</script>

<style scoped>
.ground{
	width: 100%;
	height: 50px;
	background: #000000;
}
.personalList{
	width: 100%;
	overflow: hidden;
	background: #000000;
	padding: 0 0.5%;
}
.item{
	width: 33%;
	height: 120px;
	float: left;
	position: relative;
}
.love-box{
	position: absolute;
	bottom: 5px;
	left: 10px;
}
.video{
	width:100%;
	height:100%;
}
.love-icon{
	font-size: 14px;
	color: #FFFFFF;
}
.more{
	width: 100%;
	height: 30px;
	line-height: 30px;
	text-align: center;
	font-size: 12px;
	color: #999999;
	background: #000000;
}
</style>
