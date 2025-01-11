<template>
  <view class="comment">
    <!-- 评论头部 -->
    <view class="comment-header">
      <view class="header-number">
        {{ totalComments }}条评论
      </view>
      <view class="iconfont iconchahao icon-close" @click="close">
      </view>
    </view>

    <!-- 评论列表 -->
    <scroll-view scroll-y="true" class="comment-list">
      <view v-for="(item, index) in comments" :key="index" class="item">
        <view class="img-box">
          <image class="img" :src="item.authorImage"></image>
        </view>
        <view class="comment-content">
          <view class="name">{{ item.username }}</view>
          <view class="content">{{ item.content }}</view>
        </view>
        <view class="icon-box">
          <view class="iconfont iconaixin icon-love" @click="likeComment(item)">
          </view>
          <view class="love-number">{{ item.likes }}</view>
        </view>
      </view>
    </scroll-view>

    <!-- 评论底部 -->
    <view class="comment-footer">
      留下你精彩评论吧
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      totalComments: 25000, // 总评论数（示例数据）
      comments: [
        {
          authorImage: '../static/img/author.jpg',
          username: '张三',
          content: '这个很有创意',
          likes: 12,
        },
        {
          authorImage: '../static/img/author.jpg',
          username: '李四',
          content: '很好玩',
          likes: 5,
        },
        // 更多评论数据
      ],
    };
  },
  methods: {
    close() {
      this.$emit('close'); // 关闭评论弹窗
    },
    likeComment(comment) {
      // 增加该评论的点赞数
      comment.likes++;
    }
  }
}
</script>

<style scoped>
.comment {
  background: #FFFFFF;
  height: 500px;
  border-radius: 15px 15px 0 0;
  width: 100%;
}

.comment-header {
  position: relative;
  width: 100%;
  height: 25px;
  line-height: 25px;
}

.header-number {
  width: 100%;
  text-align: center;
  font-size: 15px;
  color: #000000;
}

.icon-close {
  position: absolute;
  top: 0;
  right: 15px;
  font-size: 20px;
}

.comment-list {
  height: 425px;
  width: 100%;
  overflow-y: auto;
}

.item {
  display: flex;
  align-items: flex-start;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.img-box {
  margin-right: 10px;
}

.img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.comment-content {
  flex-grow: 1;
}

.name {
  font-size: 17px;
  font-weight: bold;
}

.content {
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}

.icon-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-love {
  font-size: 20px;
  color: #ff6a00;
  cursor: pointer;
}

.love-number {
  margin-top: 5px;
  font-size: 15px;
  color: #333;
}

.comment-footer {
  height: 50px;
  width: 100%;
  line-height: 50px;
  color: #666666;
  font-size: 16px;
  padding-left: 10px;
  text-align: left;
}
</style>
