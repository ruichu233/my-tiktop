<template>
    <view class="container">
        <!-- Header -->
        <view class="header">
            <text>发布视频</text>
        </view>

        <!-- 视频标题 -->
        <view class="title-section">
            <text>视频标题</text>
            <input v-model="title" placeholder="输入视频标题..." maxlength="50" />
        </view>

        <!-- 视频选择与预览 -->
        <view class="video-section" @click="chooseVideo">
            <view v-if="!videoSrc" class="video-placeholder">
                <text>点击选择或录制视频</text>
            </view>
            <video v-else :src="videoSrc" controls autoplay></video>
        </view>

        <!-- 封面选择上传 -->
        <view v-if="videoSrc" class="cover-section">
            <text>请选择封面</text>
            <button type="primary" @click="chooseCoverImage">上传封面图</button>
            <view class="cover-preview" v-if="coverImage">
                <image :src="coverImage"></image>
            </view>
        </view>

        <!-- 描述输入框 -->
        <view class="description-section">
            <textarea v-model="description" placeholder="输入视频描述..." maxlength="100"></textarea>
        </view>

        <!-- 发布按钮 -->
        <button type="primary" @click="uploadVideo">发布</button>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                title: "", // 视频标题
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

            // 选择上传封面图
            async chooseCoverImage() {
                const res = await uni.chooseImage({
                    count: 1,
                    sourceType: ["album", "camera"],
                });
                console.log(JSON.stringify(res));
                if (res[1].tempFilePaths) {
                    this.coverImage = res[1].tempFilePaths[0];
                    console.log(JSON.stringify(this.coverImage));
                }
            },

            // 上传视频
            async uploadVideo() {
                if (!this.title) {
                    uni.showToast({
                        title: "请输入视频标题",
                        icon: "none",
                        }
                    );
                    return;
                }

                if (!this.videoSrc) {
                    uni.showToast({
                        title: "请选择视频",
                        icon: "none",
                        }
                    );
                    return;
                }

                if (!this.coverImage) {
                    uni.showToast({
                        title: "请上传封面图",
                        icon: "none",
                        }
                    );
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
                            "access-token": uni.getStorageSync("access-token") ||
                                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzI4MjIwOTYsImlhdCI6MTczI342A5NywiaWRlbnRpdHlLZXkiOiI2MDQ2NTExNDAwNjMzMDEiLCJuYmYiOjE3MzI342A5NZ9.OqUHpDXPMxw_L96_Iw5Spe2eC0NnPQo07rfZ20otD8M",
                        },
                    });

                    if (err || uploadUrlResp.statusCode!== 200) {
                        throw new Error("获取上传链接失败");
                    }

                    // 从响应中提取封面和视频的上传URL
                    const {
                        video_url: videoUploadURL,
                        cover_url: coverUploadURL
                    } = uploadUrlResp.data;

                    if (!coverUploadURL ||!videoUploadURL) {
                        throw new Error("获取的上传链接无效");
                    }

                    // Step 2: 上传封面图
                    const fileData = uni.getFileSystemManager().readFileSync(this.coverImage);
                    const [coverErr, coverUploadResult] = await uni.request({
                        url: coverUploadURL,
                        method: 'PUT',
                        data: fileData,
                        header: {
                            'Content-Type': 'application/octet-stream',
                        }
                    });

                    if (coverErr || coverUploadResult.statusCode!== 200) {
                        throw new Error("封面图上传失败");
                    }

                    // Step 3: 上传视频文件
                    const videlData = uni.getFileSystemManager().readFileSync(this.videoSrc);
                    const [videoErr, videoUploadResult] = await uni.request({
                        url: videoUploadURL,
                        method: 'PUT',
                        data: videlData,
                        header: {
                            'Content-Type': 'application/octet-stream',
                        }
                    });

                    if (videoErr || videoUploadResult.statusCode!== 200) {
                        throw new Error("视频上传失败");
                    }

                    // 成功提示
                    uni.showToast({
                        title: "视频发布成功",
                        icon: "success",
                    });
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
        padding: 20px;
        max-width: 600px; /* 设置最大宽度 */
        margin: 0 auto; /* 水平居中 */
    }

   .header {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
    }

   .title-section {
        margin-bottom: 20px; /* 统一使用margin-bottom设置间距 */
    }

   .title-section input {
        width: 100%;
        height: 40px;
        border-radius: 8px;
        padding: 10px;
        background-color: #f2f2f2;
        transition: all 0.3s ease; /* 添加过渡效果用于聚焦时的样式变化 */
    }

   .title-section input:focus {
        border-color: #007aff; /* 聚焦时边框颜色改变 */
        box-shadow: 0 0 5px rgba(0, 122, 255, 0.5); /* 聚焦时添加阴影 */
    }

   .title-section input::placeholder {
        color: #999; /* 占位符文本颜色 */
        font-size: 14px; /* 占位符文本字体大小 */
    }

   .video-section {
        width: 100%;
        height: 250px;
        background-color: #f2f2f2;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative; /* 为加载动画设置相对定位 */
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
        animation: loading 1s linear infinite; /* 添加加载动画 */
        display: none; /* 初始隐藏加载动画 */
    }

   .video-section.loading::before {
        display: block; /* 当添加loading类时显示加载动画 */
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

   .cover-section {
        margin-bottom: 20px; /* 统一使用margin-bottom设置间距 */
    }

   .cover-preview {
        width: 100%;
        height: 150px;
        margin-top: 10px;
        border-radius: 8px;
        border: 1px solid #ddd;
        /* 添加边框 */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        /* 添加阴影 */
        overflow: hidden;
        /* 确保图片不会超出边界 */
        position: relative;
        /* 为遮罩设置定位 */
    }

   .cover-preview::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 1;
        transition: opacity 0.3s ease; /* 添加过渡效果用于遮罩显示隐藏 */
    }

   .cover-preview:hover::before {
        opacity: 0; /* 鼠标悬停时隐藏遮罩 */
    }

   .description-section {
        margin-bottom: 20px; /* 统一使用margin-bottom设置间距 */
    }

    textarea {
        width: 100%;
        height: 80px;
        border-radius: 8px;
        padding: 10px;
        background-color: #f2f2f2;
        transition: all 0.3s ease; /* 添加过渡效果用于聚焦时的样式变化 */
    }

    textarea:focus {
        border-color: #007aff; /* 聚焦时边框颜色改变 */
        box-shadow: 0 0 5px rgba(0, 122, 255, 0.5); /* 聚焦时添加阴影 */
    }

    textarea::placeholder {
        color: #999; /* 占位符文本颜色 */
        font-size: 14px; /* 占位符文本字体大小 */
    }

    button {
        transition: all 0.3s ease; /* 添加过渡效果用于悬停时的样式变化 */
    }

    button:hover {
        background-color: #007aff; /* 悬停时背景颜色改变 */
        color: #fff;
        box-shadow: 0 2px 4px rgba(0, 122, 255, 0.5); /* 悬停时添加阴影 */
    }

   .upload-button {
        margin-top: 30px;
        width: 100%;
    }
</style>