# ✔ CloudFlare IP Info Dashboard

一个强大、无服务器且免费的 IP 信息仪表板解决方案，由 Cloudflare Workers 驱动，具有用户友好的界面和多语言支持。

## README

- [English](README.md) - [繁体中文](README_zh-TW.md) - [简体中文](README_zh-CN.md) - [日本语](README_ja.md) - [한국어](README_ko.md)

## 📱 示范网址

- https://xip.im
- https://xip.im/api
- ```curl xip.im```

## ⭐ 特点

- 开源、易于部署（10分钟内完成，无需本地工具）且完全免费
- IP 信息显示
  - 显示访问者的 IP 地址
  - 提供地理位置信息，包括国家、城市和地区
  - 显示时区信息
  - 显示网络服务提供商 (ISP) 信息
  - 显示自治系统号码 (ASN)
- 多语言支持
  - 支持英语、繁体中文、简体中文、日语和韩语
  - 易于扩展，可添加更多语言
- 用户界面
  - 响应式设计，适应不同设备尺寸
  - 现代化的卡片式佈局
  - 动画效果增强用户体验
  - 暗黑模式支持
- 地图功能
  - 显示用户大致位置的互动地图
  - 可切换显示/隐藏
- API 支持
  - 提供 JSON 格式的 IP 信息 API
- 可定制性
  - 可以轻松添加或修改显示的 IP 信息
  - 支持自定义样式和佈局

## 👀 演示

![](https://raw.githubusercontent.com/KKKKKCAT/CF-IPInfo/main/img/CF-IPInfo-1.webp)
![](https://raw.githubusercontent.com/KKKKKCAT/CF-IPInfo/main/img/CF-IPInfo-2.webp)

## ⚡ 快速开始

1. 登录到您的 Cloudflare 帐户
2. 进入 Workers & Pages 部分
3. 创建一个新的 Worker
4. 将提供的代码複製并粘贴到 Worker 编辑器中
5. 保存并部署

对于代码，请参考
- [普通版本](https://github.com/KKKKKCAT/CF-IPInfo/blob/main/CF-IPInfo.js)
- [表情符号旗版本](https://github.com/KKKKKCAT/CF-IPInfo/blob/main/CF-IPInfo-emoji.js)

## 📄 API 文档

访问 `/api` 端点以获取 JSON 格式的 IP 信息。

示例响应：

```json
{
  "ip": "203.0.113.195",
  "ipVersion": "IPv4",
  "country": "United States",
  "city": "Los Angeles",
  "region": "California",
  "timezone": "America/Los_Angeles",
  "isp": "Example ISP",
  "asn": "AS12345",
  "latitude": 34.0522,
  "longitude": -118.2437
}
```

## 未来特性 (待办事项)

- [ ] 添加更多语言支持
- [x] 实现暗黑模式切换
- [x] 添加 IP 地理位置地图显示
- [x] 支持 IPv6 和 IPv4 地址格式检测
- [ ] 添加 IP 信息历史记录功能
- [x] 实现 API 端点，允许其他服务查询 IP 信息
- [ ] 添加更多 IP 相关的技术信息（如 网络类型等）
- [ ] 支持自定义域名

## 贡献

欢迎提交 Pull Requests 来改进这个项目。对于重大更改，请先开 issue 讨论您想要改变的内容。

## 👤 作者

**KKCAT**

- [![Telegram](https://img.shields.io/badge/-Telegram-2CA5E0?style=flat-square&logo=telegram&logoColor=white)](https://t.me/kkkkkcat)
- [![Twitter](https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=flat&logo=twitter)](https://x.com/kcat88888)
