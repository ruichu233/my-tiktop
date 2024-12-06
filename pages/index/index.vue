<template>
	<view class="content" >
		<tab></tab>
		<firstNav></firstNav>
		<!-- <videoList :list="list"></videoList> -->
	</view>
</template>

<script>
	import tab from '../../components/tab.vue'
	import firstNav from '../../components/first-nav.vue'
	import videoList from '../../components/videoList.vue'
	
	export default {
		data() {
			return {
				list:[]
			}
		},
		components:{
			tab,
			firstNav,
			videoList,
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getData(){
				uni.request({
					url:"http://127.0.0.1:8080/api/",
					header:{
						
					},
					success:(res)=> {
						this.list=res.data.list
					}
					
				})
			}
		}
	}
</script>

<style>
	.content{
		width: 100%;
		height: 100vh;
		background: #000000;
	}

</style>
