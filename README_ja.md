# ✔ CloudFlare IP 情報ダッシュボード

Cloudflare Workers を利用した強力でサーバーレス、そして無料の IP 情報ダッシュボードソリューションです。ユーザーフレンドリーなインターフェースと多言語サポートを特徴としています。

## README

- [English](README.md) - [繁體中文](README_zh-TW.md) - [简体中文](README_zh-CN.md) - [日本語](README_ja.md) - [한국어](README_ko.md)

## 📱 デモ

- https://xip.im
- https://xip.im/api
- ```curl xip.im```

## ⭐ 特徴

- オープンソース、簡単にデプロイ可能（10分以内、ローカルツール不要）、完全無料
- IP 情報の表示
  - 訪問者の IP アドレスを表示
  - 国、都市、地域を含む地理位置情報を提供
  - タイムゾーン情報を表示
  - インターネットサービスプロバイダー（ISP）情報を表示
  - 自律システム番号（ASN）を表示
- 多言語サポート
  - 英語、繁体字中国語、簡体字中国語、日本語、韓国語をサポート
  - 簡単に他の言語を追加可能
- ユーザーインターフェース
  - レスポンシブデザイン、さまざまなデバイスサイズに適応
  - モダンなカードベースのレイアウト
  - ユーザー体験を向上させるアニメーション効果
  - ダークモードサポート
- 地図機能
  - ユーザーのおおよその位置を表示するインタラクティブな地図
  - 表示の切り替えが可能
- API サポート
  - JSON 形式で IP 情報を提供する API
- カスタマイズ性
  - 表示する IP 情報の追加や修正が容易
  - カスタムスタイルとレイアウトをサポート

## 👀 デモ

![](https://raw.githubusercontent.com/KKKKKCAT/CF-IPInfo/main/img/CF-IPInfo-1.webp)
![](https://raw.githubusercontent.com/KKKKKCAT/CF-IPInfo/main/img/CF-IPInfo-2.webp)

## ⚡ クイックスタート

1. Cloudflare アカウントにログイン
2. Workers & Pages セクションに移動
3. 新しい Worker を作成
4. 提供されたコードを Worker エディタにコピー＆ペースト
5. 保存してデプロイ

コードについては、以下を参照してください
- [通常版](https://github.com/KKKKKCAT/CF-IPInfo/blob/main/CF-IPInfo.js)
- [絵文字フラッグ版](https://github.com/KKKKKCAT/CF-IPInfo/blob/main/CF-IPInfo-emoji.js)

## 📄 API ドキュメント

`/api` エンドポイントにアクセスすると、JSON 形式で IP 情報を取得できます。

レスポンス例：

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

## 今後の機能 (TODO)

- [ ] より多くの言語のサポートを追加
- [x] ダークモード切り替えの実装
- [x] IP位置情報マップ表示の追加
- [x] IPv6とIPv4アドレス形式の検出をサポート
- [ ] IP情報履歴機能の追加
- [x] 他のサービスがIP情報を照会できるAPIエンドポイントの実装
- [ ] より多くのIP関連技術情報の追加（例：ネットワークタイプ）
- [ ] カスタムドメイン名のサポート

## 貢献

このプロジェクトを改善するためのプルリクエストを歓迎します。大きな変更については、まず問題を開いて、変更したい内容について議論してください。

## 👤 作者

**KKCAT**

- [![Telegram](https://img.shields.io/badge/-Telegram-2CA5E0?style=flat-square&logo=telegram&logoColor=white)](https://t.me/kkkkkcat)
- [![Twitter](https://img.shields.io/badge/Twitter-フォロー-1DA1F2?style=flat&logo=twitter)](https://x.com/kcat88888)
