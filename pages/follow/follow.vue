<template>
	<view class="content">
		<tab></tab>
		<firstNav></firstNav>
		<videoList :list="list"></videoList>
	</view>
</template>

<script>
	import tab from '../../components/tab.vue'
	import firstNav from '../../components/first-nav.vue'
	import videoList from '../../components/videoList.vue'

	export default {
		data() {
			return {
				list: []
			}
		},
		components: {
			tab,
			firstNav,
			videoList,
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getData() {
				const[err,videoListResp] = uni.request({
					url: "http://127.0.0.1:8080/v1/video/video-list",
					data: {
						page: 10,
						cursor: 0,
						feed_type: 1
					},
					method: 'POST',
					header: {
						"access-token": uni.getStorageSync("access-token")
					},
					success: (res) => {
						this.list = res.data.data.video_list
						console.log(this.list)
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: 100vh;
		background: #000000;
	}
</style>