# ✔ CloudFlare IP Info Dashboard

A powerful, serverless, and free IP information dashboard solution powered by Cloudflare Workers, featuring a user-friendly interface and multi-language support.

## 📱 Demo

- https://xip.im
- https://xip.im/api

## ⭐ Features

- Open-source, easy to deploy (within 10 minutes, no local tools required), and completely free
- IP Information Display
  - Shows visitor's IP address
  - Provides geolocation information including country, city, and region
  - Displays timezone information
  - Shows Internet Service Provider (ISP) information
  - Displays Autonomous System Number (ASN)
- Multi-language Support
  - Supports English, Traditional Chinese, Simplified Chinese, Japanese, and Korean
  - Easily extendable to add more languages
- User Interface
  - Responsive design, adapts to different device sizes
  - Modern card-based layout
  - Animation effects to enhance user experience
  - Dark mode support
- Map Functionality
  - Interactive map showing user's approximate location
  - Toggleable display
- API Support
  - Provides IP information API in JSON format
- Customizability
  - Easy to add or modify displayed IP information
  - Supports custom styles and layouts

## 👀 Demo

![](https://raw.githubusercontent.com/KKKKKCAT/CF-IPInfo/main/img/CF-IPInfo-1.webp)
![](https://raw.githubusercontent.com/KKKKKCAT/CF-IPInfo/main/img/CF-IPInfo-2.webp)

## ⚡ Quick Start

1. Log in to your Cloudflare account
2. Go to the Workers & Pages section
3. Create a new Worker
4. Copy and paste the provided code into the Worker editor
5. Save and deploy

For the code, please refer to the [GitHub repository](https://github.com/KKKKKCAT/CF-IPInfo/blob/main/CF-IPInfo.js)

## 📄 API Documentation

Access the `/api` endpoint to get IP information in JSON format.

Example response:

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

## Future Features (TODO)

- [ ] Add support for more languages
- [x] Implement dark mode toggle
- [x] Add IP geolocation map display
- [x] Support IPv6 and IPv4 address format detection
- [ ] Add IP information history feature
- [x] Implement API endpoint allowing other services to query IP information
- [ ] Add more IP-related technical information (e.g., network type)
- [ ] Support custom domain names

## Contributing

Pull requests are welcome to improve this project. For major changes, please open an issue first to discuss what you would like to change.

## 👤 Author

**KKCAT**

- [![Telegram](https://img.shields.io/badge/-Telegram-2CA5E0?style=flat-square&logo=telegram&logoColor=white)](https://t
