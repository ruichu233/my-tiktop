// utils/websocket.js
class WebSocketManager {
  constructor() {
    this.socket = null;
    this.listeners = {};
    this.status = "closed";
  }

  connect(url) {
    if (this.status === "connected") {
      console.warn("WebSocket 已连接，请勿重复连接");
      return;
    }
    this.status = "connecting";
    this.socket = uni.connectSocket({
      url,
      success: () => {
        console.log("WebSocket 连接请求已发送");
      },
      fail: (error) => {
        console.error("WebSocket 连接失败", error);
        this.status = "closed";
      },
    });
    this.initEventHandlers();
  }

  initEventHandlers() {
    uni.onSocketOpen(() => {
        console.log("WebSocket 连接成功");
        this.status = "connected";
        this.triggerEvent("open");
    });

    uni.onSocketMessage(({ data }) => {
        console.log("收到原始消息:", data);
        try {
            // 如果数据已经是对象，直接使用
            if (typeof data === 'object') {
                console.log("数据是对象，直接使用:", data);
                this.triggerEvent("message", data);
                return;
            }

            // 尝试解析字符串数据
            let parsedData;
            try {
                parsedData = JSON.parse(data);
            } catch (parseError) {
                // 如果解析失败，尝试先解码再解析
                try {
                    parsedData = JSON.parse(decodeURIComponent(data));
                } catch (decodeError) {
                    console.error("数据解析失败:", data);
                    return;
                }
            }

            console.log("解析后的消息:", parsedData);
            this.triggerEvent("message", parsedData);
        } catch (err) {
            console.error("消息处理失败:", err);
            // 如果所有解析都失败，尝试直接发送原始数据
            this.triggerEvent("message", data);
        }
    });

    uni.onSocketError((err) => {
      console.error("WebSocket 错误", err);
      this.triggerEvent("error", err);
    });

    uni.onSocketClose(() => {
      console.log("WebSocket 已关闭");
      this.status = "closed";
      this.triggerEvent("close");
    });
  }

  sendMessage(message) {
    if (this.status !== "connected") {
      console.error("WebSocket 未连接，无法发送消息");
      return;
    }
    const payload = JSON.stringify(message);
    uni.sendSocketMessage({
      data: payload,
      success: () => {
        console.log("消息发送成功", payload);
      },
      fail: (err) => {
        console.error("消息发送失败", err);
      },
    });
  }

  close() {
    if (this.status === "closed") {
      console.warn("WebSocket 未连接，无需关闭");
      return;
    }
    uni.closeSocket({
      success: () => {
        console.log("WebSocket 连接已关闭");
        this.status = "closed";
      },
      fail: (err) => {
        console.error("关闭 WebSocket 失败", err);
      },
    });
  }

  addListener(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  triggerEvent(event, data = null) {
    (this.listeners[event] || []).forEach((callback) => callback(data));
  }
}

const WebSocketInstance = new WebSocketManager();
export default WebSocketInstance;