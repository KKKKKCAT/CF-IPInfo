# ✔ CloudFlare IP Info Dashboard

一個強大、無服務器且免費的 IP 信息儀表板解決方案，由 Cloudflare Workers 驅動，具有用戶友好的界面和多語言支持。

## README

- [English](README.md) - [繁體中文](README_zh-TW.md) - [简体中文](README_zh-CN.md) - [日本語](README_ja.md) - [한국어](README_ko.md)

## 📱 示範網址

- https://xip.im
- https://xip.im/api
- ```curl xip.im```

## ⭐ 特點

- 開源、易於部署（10分鐘內完成，無需本地工具）且完全免費
- IP 信息顯示
  - 顯示訪問者的 IP 地址
  - 提供地理位置信息，包括國家、城市和地區
  - 顯示時區信息
  - 顯示網絡服務提供商 (ISP) 信息
  - 顯示自治系統號碼 (ASN)
- 多語言支持
  - 支持英語、繁體中文、簡體中文、日語和韓語
  - 易於擴展，可添加更多語言
- 用戶界面
  - 響應式設計，適應不同設備尺寸
  - 現代化的卡片式佈局
  - 動畫效果增強用戶體驗
  - 暗黑模式支持
- 地圖功能
  - 顯示用戶大致位置的互動地圖
  - 可切換顯示/隱藏
- API 支持
  - 提供 JSON 格式的 IP 信息 API
- 可定制性
  - 可以輕鬆添加或修改顯示的 IP 信息
  - 支持自定義樣式和佈局

## 👀 演示

![](https://raw.githubusercontent.com/KKKKKCAT/CF-IPInfo/main/img/CF-IPInfo-1.webp)
![](https://raw.githubusercontent.com/KKKKKCAT/CF-IPInfo/main/img/CF-IPInfo-2.webp)

## ⚡ 快速開始

1. 登錄到您的 Cloudflare 帳戶
2. 進入 Workers & Pages 部分
3. 創建一個新的 Worker
4. 將提供的代碼複製並粘貼到 Worker 編輯器中
5. 保存並部署

代碼請參考 [GitHub 倉庫](https://github.com/KKKKKCAT/CF-IPInfo/blob/main/CF-IPInfo.js)

## 📄 API 文檔

訪問 `/api` 端點以獲取 JSON 格式的 IP 信息。

示例響應：

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

## 未來特性 (待辦事項)

- [ ] 添加更多語言支持
- [x] 實現暗黑模式切換
- [x] 添加 IP 地理位置地圖顯示
- [x] 支持 IPv6 和 IPv4 地址格式檢測
- [ ] 添加 IP 信息歷史記錄功能
- [x] 實現 API 端點，允許其他服務查詢 IP 信息
- [ ] 添加更多 IP 相關的技術信息（如 網絡類型等）
- [ ] 支持自定義域名

## 貢獻

歡迎提交 Pull Requests 來改進這個項目。對於重大更改，請先開 issue 討論您想要改變的內容。

## 👤 作者

**KKCAT**

- [![Telegram](https://img.shields.io/badge/-Telegram-2CA5E0?style=flat-square&logo=telegram&logoColor=white)](https://t.me/kkkkkcat)
- [![Twitter](https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=flat&logo=twitter)](https://x.com/kcat88888)
