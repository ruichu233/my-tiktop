<template>
	<view class="personalInfo">
		<!-- 右上角的按钮 -->
		<view class="menu-button" @click="toggleMenu">
			<text>☰</text>
		</view>
		<!-- 弹出菜单 -->
		<view v-if="showMenu" class="menu">
			<view class="menu-item" @click="logout">退出登录</view>
		</view>
		<view class="background-img-box">
			<image class="background-img" src="../static/img/background.jpg" mode=""></image>
		</view>
		<view class="top">
			<view class="personal-img-box">
				<image class="personal-img" :src="userInf.avatar ? userInf.avatar : defaultAvatar" mode=""></image>
			</view>
			<view v-if="pages === 'user'" :style="style4" class="change" @click="change">
				<text v-show="changeContent === '关注'" class="iconfont iconjiahao"></text> {{ changeContent }}
			</view>
			<view v-else class="change" @click="changeInfo">
				编辑资料
			</view>
		</view>
		<view class="name-box">
			<view class="name">
				{{ userInf.name }}
			</view>
			<view class="douyinId">
				邮箱号:{{ userInf.email }}
			</view>
		</view>
		<view class="text-box">
			<view class="introduce">
				{{ userInf.signature }}
			</view>
			<view class="number-box">
				<view class="box">
					<text class="number">{{ userInf.follow }}</text>
					<text class="number-text">关注</text>
				</view>
				<view class="box">
					<text class="number">{{ userInf.fans }}</text>
					<text class="number-text">粉丝</text>
				</view>
			</view>
		</view>

		<view class="option-box">
			<view class="option" :style="style1" @click="click('作品')">
				作品
			</view>
			<view class="option" :style="style3" @click="click('喜欢')">
				喜欢
			</view>
		</view>
	</view>
</template>
<script>
export default {
  props: ['pages', 'userInfo', "isfollow"],
  data() {
    return {
      myisfollow: this.isfollow, // 初始值设置为 props 传入的 isfollow
      style1: 'border-bottom:3px solid #F0AD4E;',
      style2: '',
      style3: '',
      style4: this.isfollow ? "" : 'background:red',
      changeContent: this.isfollow ? "取消关注" : "关注",
      userInf: this.userInfo,
      showMenu: false,
      defaultAvatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg', // 添加默认头像路径
    };
  },
  watch: {
    isfollow: {
      immediate: true,
      handler(newVal) {
        this.myisfollow = newVal;
        // 同时更新关注按钮的样式和文本
        this.style4 = !newVal ? 'background:red' : '';
        this.changeContent = newVal ? "取消关注" : "关注";
      }
    }
  },
  methods: {
    change() {
      this.myisfollow = !this.myisfollow; // 切换关注状态
      this.style4 = !this.myisfollow ? "background:red" : '';
      this.changeContent = this.myisfollow ? "取消关注" : '关注';
      let type = 2
      if (this.changeContent === '取消关注') {
        type = 1
      }
      uni.request({
        url: "http://127.0.0.1:8080/v1/follow/follow-action",
        method: 'POST',
        header: {
          "access-token": uni.getStorageSync('access-token'),
        },
        data: {
          "action_type": type,
          "followee_id": this.userInf.userId,
        }
      })
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    logout() {
      // 退出登录的逻辑
      console.log('退出登录');
      // 这里可以添加实际的退出登录代码，例如清除本地存储的用户信息等
      uni.setStorageSync("access-token", "")
      this.showMenu = false; // 关闭菜单
      uni.switchTab({
        url: "/pages/index/index"
      })
    },
    click(res) {
      console.log("click")
      switch (res) {
        case "作品":
          this.style1 = 'border-bottom:3px solid #F0AD4E;'
          this.style2 = ""
          this.style3 = ""
          this.$emit('change', res)
          break;
        case "喜欢":
          this.style3 = 'border-bottom:3px solid #F0AD4E;'
          this.style2 = ""
          this.style1 = ""
          this.$emit('change', res)
          break;
        default:
          break;
      }
    },
    changeInfo() {
      if (uni.getStorageSync("access-token") == "") {
        uni.navigateTo({
          url: "/pages/login/login"
        })
      } else {
        uni.navigateTo({
          url: '/pages/changeInfo/changeInfo'
        })
      }
    },
  },
}
</script>
<style scoped>
.menu-button {
	width: 40px;
	height: 40px;
	background-color: #ccc;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
	cursor: pointer;
	position: absolute;
	top: 10px;
	right: 10px;
	z-index: 10;
	/* 设置较高的z-index值 */
}

.menu {
	position: absolute;
	top: 50px;
	right: 10px;
	background-color: #000;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	z-index: 100;
	/* 确保菜单在最上层 */
}

.menu-item {
	padding: 10px;
	color: #fff;
	cursor: pointer;
}

.menu-item:hover {
	background-color: #333;
}

.personalInfo {
	width: 100%;
	background: #000000;
	position: relative;
}

.background-img-box {
	width: 100%;
	padding: 0 2rpx;
	z-index: 19;
}

.background-img {
	width: 100%;
	height: 360rpx;
}

.top {
	width: 100%;
	position: absolute;
	top: 280rpx;
	left: 0;
	z-index: 20;
	background: #000000;
	height: 120rpx;
}

.personal-img-box {
	margin: -50rpx 0 0 60rpx;
}

.personal-img {
	width: 160rpx;
	height: 160rpx;
	border-radius: 50%;
	z-index: 20;
	border: 7rpx solid #000000;
}

.change {
	position: absolute;
	top: 30rpx;
	right: 50rpx;
	width: 55%;
	height: 70rpx;
	line-height: 70rpx;
	font-size: 32rpx;
	text-align: center;
	background: #333333;
	border-radius: 4rpx;
	color: #ffffff;
}

.name-box {
	padding: 0 50rpx;
	color: #EEEEEE;
	z-index: 20;
	margin-top: 40rpx;
}

.name {
	height: 100rpx;
	line-height: 100rpx;
	font-size: 52rpx;
}

.douyinId {
	height: 50rpx;
	line-height: 50rpx;
	font-size: 28rpx;
}

.text-box {
	z-index: 20;
	padding: 0 50rpx;
	margin-top: 16rpx;
	border-top: 2rpx solid #222222;
}

.introduce {
	height: 60rpx;
	line-height: 60rpx;
	font-size: 30rpx;
	color: #EEEEEE;
}

.label-box {
	width: 100%;
	height: 50rpx;
	margin-top: 10rpx;
	line-height: 50rpx;
	color: #EEEEEE;
}

.label {
	height: 40rpx;
	padding: 0 10rpx;
	line-height: 40rpx;
	font-size: 23rpx;
	background: #333333;
	color: #999999;
	float: left;
	border-radius: 3rpx;
	margin-right: 20rpx;
}

.number-box {
	width: 100%;
	height: 100rpx;
	line-height: 100rpx;
}

.box {
	height: 80rpx;
	line-height: 80rPX;
	float: left;
	margin-right: 25rpx;
}

.number {
	color: #FFFFFF;
	font-size: 30rpx;
}

.number-text {
	color: #999999;
	font-size: 26rpx;
	width: 200rpx;
}

.add-box {
	margin: 0 6%;
	height: 80rpx;
	line-height: 80rpx;
	background: #333333;
	border-radius: 6rpx;
	text-align: center;
	color: #FFFFFF;
}

.add {
	padding-left: 10rpx;
	font-size: 26rpx;
}

.option-box {
	width: 100%;
	height: 10rpx;
	line-height: 100rpx;
	margin-bottom: 20rpx;
}

.option {
	width: 33%;
	height: 100rpx;
	line-height: 100rpx;
	color: #999999;
	float: left;
	text-align: center;
}
</style>