# ✔ CloudFlare IP 정보 대시보드

Cloudflare Workers로 구동되는 강력하고, 서버리스이며, 무료인 IP 정보 대시보드 솔루션으로, 사용자 친화적인 인터페이스와 다국어 지원을 제공합니다.

## README

- [English](README.md) - [繁體中文](README_zh-TW.md) - [简体中文](README_zh-CN.md) - [日本語](README_ja.md) - [한국어](README_ko.md)

## 📱 데모

- https://xip.im
- https://xip.im/api
- ```curl xip.im```

## ⭐ 특징

- 오픈 소스, 쉬운 배포 (10분 이내, 로컬 도구 불필요), 완전 무료
- IP 정보 표시
  - 방문자의 IP 주소 표시
  - 국가, 도시, 지역을 포함한 지리적 위치 정보 제공
  - 시간대 정보 표시
  - 인터넷 서비스 제공업체(ISP) 정보 표시
  - 자율 시스템 번호(ASN) 표시
- 다국어 지원
  - 영어, 번체 중국어, 간체 중국어, 일본어, 한국어 지원
  - 쉽게 더 많은 언어 추가 가능
- 사용자 인터페이스
  - 반응형 디자인, 다양한 기기 크기에 적응
  - 현대적인 카드 기반 레이아웃
  - 사용자 경험을 향상시키는 애니메이션 효과
  - 다크 모드 지원
- 지도 기능
  - 사용자의 대략적인 위치를 보여주는 대화형 지도
  - 토글 가능한 표시
- API 지원
  - JSON 형식의 IP 정보 API 제공
- 사용자 정의 가능
  - 표시되는 IP 정보를 쉽게 추가하거나 수정 가능
  - 사용자 정의 스타일 및 레이아웃 지원

## 👀 데모

![](https://raw.githubusercontent.com/KKKKKCAT/CF-IPInfo/main/img/CF-IPInfo-1.webp)
![](https://raw.githubusercontent.com/KKKKKCAT/CF-IPInfo/main/img/CF-IPInfo-2.webp)

## ⚡ 빠른 시작

1. Cloudflare 계정에 로그인
2. Workers & Pages 섹션으로 이동
3. 새 Worker 생성
4. 제공된 코드를 Worker 편집기에 복사하여 붙여넣기
5. 저장 및 배포

코드는 [GitHub 저장소](https://github.com/KKKKKCAT/CF-IPInfo/blob/main/CF-IPInfo.js)를 참조하세요.

## 📄 API 문서

JSON 형식의 IP 정보를 얻으려면 `/api` 엔드포인트에 접근하세요.

응답 예시:

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

## 향후 기능 (TODO)

- [ ] 더 많은 언어 지원 추가
- [x] 다크 모드 토글 구현
- [x] IP 지오로케이션 지도 표시 추가
- [x] IPv6 및 IPv4 주소 형식 감지 지원
- [ ] IP 정보 이력 기능 추가
- [x] 다른 서비스에서 IP 정보를 조회할 수 있는 API 엔드포인트 구현
- [ ] 더 많은 IP 관련 기술 정보 추가 (예: 네트워크 유형)
- [ ] 사용자 정의 도메인 이름 지원

## 기여하기

이 프로젝트를 개선하기 위한 풀 리퀘스트를 환영합니다. 주요 변경사항의 경우, 먼저 이슈를 열어 변경하고자 하는 내용에 대해 논의해 주세요.

## 👤 작성자

**KKCAT**

- [![텔레그램](https://img.shields.io/badge/-Telegram-2CA5E0?style=flat-square&logo=telegram&logoColor=white)](https://t.me/kkkkkcat)
- [![트위터](https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=flat&logo=twitter)](https://x.com/kcat88888)
