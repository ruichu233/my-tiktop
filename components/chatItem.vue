<template>
  <view class="message-item">
    <view class="message-content">{{ message.content }}</view>
    <view class="message-time">{{ message.timestamp }}</view>
  </view>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style scoped>
.message-item {
  padding: 10px;
  margin-bottom: 5px;
  background-color: #f0f0f0;
  border-radius: 10px;
}

.message-content {
  font-size: 16px;
}

.message-time {
  font-size: 12px;
  text-align: right;
  color: #888;
}
</style>
