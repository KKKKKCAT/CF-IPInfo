addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const countryFlags = {
  'AD': '🇦🇩', 'AE': '🇦🇪', 'AF': '🇦🇫', 'AG': '🇦🇬', 'AI': '🇦🇮', 'AL': '🇦🇱', 'AM': '🇦🇲', 'AO': '🇦🇴', 'AQ': '🇦🇶', 'AR': '🇦🇷', 'AS': '🇦🇸', 'AT': '🇦🇹', 'AU': '🇦🇺', 'AW': '🇦🇼', 'AX': '🇦🇽', 'AZ': '🇦🇿', 'BA': '🇧🇦', 'BB': '🇧🇧', 'BD': '🇧🇩', 'BE': '🇧🇪', 'BF': '🇧🇫', 'BG': '🇧🇬', 'BH': '🇧🇭', 'BI': '🇧🇮', 'BJ': '🇧🇯', 'BL': '🇧🇱', 'BM': '🇧🇲', 'BN': '🇧🇳', 'BO': '🇧🇴', 'BQ': '🇧🇶', 'BR': '🇧🇷', 'BS': '🇧🇸', 'BT': '🇧🇹', 'BV': '🇧🇻', 'BW': '🇧🇼', 'BY': '🇧🇾', 'BZ': '🇧🇿', 'CA': '🇨🇦', 'CC': '🇨🇨', 'CD': '🇨🇩', 'CF': '🇨🇫', 'CG': '🇨🇬', 'CH': '🇨🇭', 'CI': '🇨🇮', 'CK': '🇨🇰', 'CL': '🇨🇱', 'CM': '🇨🇲', 'CN': '🇨🇳', 'CO': '🇨🇴', 'CR': '🇨🇷', 'CU': '🇨🇺', 'CV': '🇨🇻', 'CW': '🇨🇼', 'CX': '🇨🇽', 'CY': '🇨🇾', 'CZ': '🇨🇿', 'DE': '🇩🇪', 'DJ': '🇩🇯', 'DK': '🇩🇰', 'DM': '🇩🇲', 'DO': '🇩🇴', 'DZ': '🇩🇿', 'EC': '🇪🇨', 'EE': '🇪🇪', 'EG': '🇪🇬', 'EH': '🇪🇭', 'ER': '🇪🇷', 'ES': '🇪🇸', 'ET': '🇪🇹', 'FI': '🇫🇮', 'FJ': '🇫🇯', 'FK': '🇫🇰', 'FM': '🇫🇲', 'FO': '🇫🇴', 'FR': '🇫🇷', 'GA': '🇬🇦', 'GB': '🇬🇧', 'GD': '🇬🇩', 'GE': '🇬🇪', 'GF': '🇬🇫', 'GG': '🇬🇬', 'GH': '🇬🇭', 'GI': '🇬🇮', 'GL': '🇬🇱', 'GM': '🇬🇲', 'GN': '🇬🇳', 'GP': '🇬🇵', 'GQ': '🇬🇶', 'GR': '🇬🇷', 'GS': '🇬🇸', 'GT': '🇬🇹', 'GU': '🇬🇺', 'GW': '🇬🇼', 'GY': '🇬🇾', 'HK': '🇭🇰', 'HM': '🇭🇲', 'HN': '🇭🇳', 'HR': '🇭🇷', 'HT': '🇭🇹', 'HU': '🇭🇺', 'ID': '🇮🇩', 'IE': '🇮🇪', 'IL': '🇮🇱', 'IM': '🇮🇲', 'IN': '🇮🇳', 'IO': '🇮🇴', 'IQ': '🇮🇶', 'IR': '🇮🇷', 'IS': '🇮🇸', 'IT': '🇮🇹', 'JE': '🇯🇪', 'JM': '🇯🇲', 'JO': '🇯🇴', 'JP': '🇯🇵', 'KE': '🇰🇪', 'KG': '🇰🇬', 'KH': '🇰🇭', 'KI': '🇰🇮', 'KM': '🇰🇲', 'KN': '🇰🇳', 'KP': '🇰🇵', 'KR': '🇰🇷', 'KW': '🇰🇼', 'KY': '🇰🇾', 'KZ': '🇰🇿', 'LA': '🇱🇦', 'LB': '🇱🇧', 'LC': '🇱🇨', 'LI': '🇱🇮', 'LK': '🇱🇰', 'LR': '🇱🇷', 'LS': '🇱🇸', 'LT': '🇱🇹', 'LU': '🇱🇺', 'LV': '🇱🇻', 'LY': '🇱🇾', 'MA': '🇲🇦', 'MC': '🇲🇨', 'MD': '🇲🇩', 'ME': '🇲🇪', 'MF': '🇲🇫', 'MG': '🇲🇬', 'MH': '🇲🇭', 'MK': '🇲🇰', 'ML': '🇲🇱', 'MM': '🇲🇲', 'MN': '🇲🇳', 'MO': '🇲🇴', 'MP': '🇲🇵', 'MQ': '🇲🇶', 'MR': '🇲🇷', 'MS': '🇲🇸', 'MT': '🇲🇹', 'MU': '🇲🇺', 'MV': '🇲🇻', 'MW': '🇲🇼', 'MX': '🇲🇽', 'MY': '🇲🇾', 'MZ': '🇲🇿', 'NA': '🇳🇦', 'NC': '🇳🇨', 'NE': '🇳🇪', 'NF': '🇳🇫', 'NG': '🇳🇬', 'NI': '🇳🇮', 'NL': '🇳🇱', 'NO': '🇳🇴', 'NP': '🇳🇵', 'NR': '🇳🇷', 'NU': '🇳🇺', 'NZ': '🇳🇿', 'OM': '🇴🇲', 'PA': '🇵🇦', 'PE': '🇵🇪', 'PF': '🇵🇫', 'PG': '🇵🇬', 'PH': '🇵🇭', 'PK': '🇵🇰', 'PL': '🇵🇱', 'PM': '🇵🇲', 'PN': '🇵🇳', 'PR': '🇵🇷', 'PS': '🇵🇸', 'PT': '🇵🇹', 'PW': '🇵🇼', 'PY': '🇵🇾', 'QA': '🇶🇦', 'RE': '🇷🇪', 'RO': '🇷🇴', 'RS': '🇷🇸', 'RU': '🇷🇺', 'RW': '🇷🇼', 'SA': '🇸🇦', 'SB': '🇸🇧', 'SC': '🇸🇨', 'SD': '🇸🇩', 'SE': '🇸🇪', 'SG': '🇸🇬', 'SH': '🇸🇭', 'SI': '🇸🇮', 'SJ': '🇸🇯', 'SK': '🇸🇰', 'SL': '🇸🇱', 'SM': '🇸🇲', 'SN': '🇸🇳', 'SO': '🇸🇴', 'SR': '🇸🇷', 'SS': '🇸🇸', 'ST': '🇸🇹', 'SV': '🇸🇻', 'SX': '🇸🇽', 'SY': '🇸🇾', 'SZ': '🇸🇿', 'TC': '🇹🇨', 'TD': '🇹🇩', 'TF': '🇹🇫', 'TG': '🇹🇬', 'TH': '🇹🇭', 'TJ': '🇹🇯', 'TK': '🇹🇰', 'TL': '🇹🇱', 'TM': '🇹🇲', 'TN': '🇹🇳', 'TO': '🇹🇴', 'TR': '🇹🇷', 'TT': '🇹🇹', 'TV': '🇹🇻', 'TW': '🇹🇼', 'TZ': '🇹🇿', 'UA': '🇺🇦', 'UG': '🇺🇬', 'UM': '🇺🇲', 'US': '🇺🇸', 'UY': '🇺🇾', 'UZ': '🇺🇿', 'VA': '🇻🇦', 'VC': '🇻🇨', 'VE': '🇻🇪', 'VG': '🇻🇬', 'VI': '🇻🇮', 'VN': '🇻🇳', 'VU': '🇻🇺', 'WF': '🇼🇫', 'WS': '🇼🇸', 'YE': '🇾🇪', 'YT': '🇾🇹', 'ZA': '🇿🇦', 'ZM': '🇿🇲', 'ZW': '🇿🇼'
};


const translations = {
  en: {
    title: "Your IP Information Dashboard",
    ip: "IP Address",
    country: "Country",
    city: "City",
    region: "Region",
    timezone: "Timezone",
    isp: "ISP",
    asn: "ASN",
    sourceCode: "Source code on GitHub",
    showMap: "Show Map",
    hideMap: "Hide Map",
    flag: "Flag",
  },
  'zh-TW': {
    title: "您的 IP 信息儀表板",
    ip: "IP 地址",
    country: "國家",
    city: "城市",
    region: "地區",
    timezone: "時區",
    isp: "網絡服務商",
    asn: "自治系統號碼",
    sourceCode: "源碼來自 GitHub",
    showMap: "顯示地圖",
    hideMap: "隱藏地圖",
    flag: "旗",
  },
  'zh-CN': {
    title: "您的 IP 信息仪表板",
    ip: "IP 地址",
    country: "国家",
    city: "城市",
    region: "地区",
    timezone: "时区",
    isp: "网络服务商",
    asn: "自治系统号码",
    sourceCode: "源码来自 GitHub",
    showMap: "显示地图",
    hideMap: "隐藏地图",
    flag: "旗",
  },
  ja: {
    title: "あなたの IP 情報ダッシュボード",
    ip: "IP アドレス",
    country: "国",
    city: "都市",
    region: "地域",
    timezone: "タイムゾーン",
    isp: "インターネットサービスプロバイダー",
    asn: "自律システム番号",
    sourceCode: "GitHub のソースコード",
    showMap: "地図を表示",
    hideMap: "地図を隠す",
    flag: "旗",
  },
  ko: {
    title: "IP 정보 대시보드",
    ip: "IP 주소",
    country: "국가",
    city: "도시",
    region: "지역",
    timezone: "시간대",
    isp: "인터넷 서비스 제공업체",
    asn: "자율 시스템 번호",
    sourceCode: "GitHub의 소스 코드",
    showMap: "지도 표시",
    hideMap: "지도 숨기기",
    flag: "국기",
  }
};


function detectIPVersion(ip) {
  if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)) {
    return 'IPv4';
  } else if (/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(ip)) {
    return 'IPv6';
  }
  return 'Unknown';
}

async function handleApiRequest(request) {
  const clientIP = request.headers.get('CF-Connecting-IP') || 'Unknown';
  const ipVersion = detectIPVersion(clientIP);
  const country = request.cf.country || 'Unknown';
  const countryFlag = countryFlags[country] || '🏴‍☠️';
  const city = request.cf.city || 'Unknown';
  const region = request.cf.region || 'Unknown';
  const timezone = request.cf.timezone || 'Unknown';
  const asOrganization = request.cf.asOrganization || 'Unknown';
  const asn = request.cf.asn || 'Unknown';
  const latitude = request.cf.latitude || 0;
  const longitude = request.cf.longitude || 0;

  const data = {
    ip: clientIP,
    ipVersion: ipVersion,
    country: country,
    countryFlag: countryFlag,
    city: city,
    region: region,
    timezone: timezone,
    isp: asOrganization,
    asn: asn,
    latitude: latitude,
    longitude: longitude
  };

  return new Response(JSON.stringify(data), {
    headers: { 
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    },
  });
}

async function handleRequest(request) {
  const url = new URL(request.url);
  const acceptHeader = request.headers.get('Accept') || '';

  if (acceptHeader.includes('application/json') || request.headers.get('User-Agent')?.toLowerCase().includes('curl')) {
    return handleApiRequest(request);
  }
  
  if (url.pathname === '/api') {
    return handleApiRequest(request);
  }

  const clientIP = request.headers.get('CF-Connecting-IP') || 'Unknown';
  const ipVersion = detectIPVersion(clientIP);
  const country = request.cf.country || 'Unknown';
  const countryFlag = countryFlags[country] || '🏴‍☠️';
  const city = request.cf.city || 'Unknown';
  const region = request.cf.region || 'Unknown';
  const timezone = request.cf.timezone || 'Unknown';
  const asOrganization = request.cf.asOrganization || 'Unknown';
  const asn = request.cf.asn || 'Unknown';
  const latitude = request.cf.latitude || 0;
  const longitude = request.cf.longitude || 0;

  
  let lang = url.searchParams.get('lang') || 'en';
  if (!translations[lang]) lang = 'en';

  const t = translations[lang];

  const html = `
<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.title}</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
  <style>
    :root {
      --primary-color: #4a90e2;
      --secondary-color: #50E3C2;
      --background-color: #f0f4f8;
      --text-color: #333;
      --card-background: #ffffff;
    }
    .dark-mode {
      --primary-color: #61a0ff;
      --secondary-color: #6affe6;
      --background-color: #1a1a1a;
      --text-color: #f0f0f0;
      --card-background: #2c2c2c;
    }
    body {
      font-family: 'Roboto', sans-serif;
      background-color: var(--background-color);
      color: var(--text-color);
      margin: 0;
      padding: 20px;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      transition: background-color 0.3s, color 0.3s;
    }
    .container {
      background-color: var(--card-background);
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      padding: 40px;
      width: 90%;
      max-width: 800px;
      padding: 20px;
      margin: auto;
      text-align: center;
      animation: fadeIn 1s ease-out;
      flex-grow: 1;
      transition: background-color 0.3s;
    }
    h1 {
      color: var(--primary-color);
      margin-bottom: 30px;
      font-size: 2.5em;
    }
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
    .info-item {
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      border-radius: 15px;
      padding: 20px;
      color: white;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 100px;
    }
    .info-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    .label {
      font-weight: 300;
      font-size: 0.9em;
      margin-bottom: 5px;
    }
    .value {
      font-weight: 700;
      font-size: 1.2em;
      word-break: break-all;
    }
    .ip-address {
      grid-column: 1 / -1;
    }
    .language-selector {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
    .language-selector a {
      margin: 0 10px;
      color: var(--primary-color);
      text-decoration: none;
    }
    #darkModeToggle {
      background: none;
      border: none;
      color: var(--primary-color);
      font-size: 1.5em;
      cursor: pointer;
      padding: 0;
      margin-left: 20px;
    }
    footer {
      text-align: center;
      margin-top: 20px;
      padding: 10px;
      font-size: 0.9em;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
    footer a, footer span {
      color: var(--primary-color);
      text-decoration: none;
      margin: 0 5px;
    }
    #map {
      height: 300px;
      width: 100%;
      margin-top: 20px;
      border-radius: 15px;
      overflow: hidden;
      display: none;
    }
    #mapToggle {
      margin-top: 20px;
      padding: 10px 20px;
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    #mapToggle:hover {
      background-color: var(--secondary-color);
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media (max-width: 600px) {
      .container {
        width: 95%;
        padding: 15px;
      }
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }
    
    @media (max-width: 600px) {
      .info-grid {
        grid-template-columns: 1fr;
      }
    }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>${t.title}</h1>
    <div class="info-grid">
      <div class="info-item ip-address">
        <div class="label">${t.ip}</div>
        <div class="value">${clientIP}</div>
      </div>
      <div class="info-item">
      <div class="label">${t.flag}</div>
        <div class="value">${countryFlag}</div>
      </div>
      <div class="info-item">
        <div class="label">${t.country}</div>
        <div class="value">${country}</div>
      </div>
      <div class="info-item">
        <div class="label">${t.city}</div>
        <div class="value">${city}</div>
      </div>
      <div class="info-item">
        <div class="label">${t.region}</div>
        <div class="value">${region}</div>
      </div>
      <div class="info-item">
        <div class="label">${t.timezone}</div>
        <div class="value">${timezone}</div>
      </div>
      <div class="info-item">
        <div class="label">${t.isp}</div>
        <div class="value">${asOrganization}</div>
      </div>
      <div class="info-item">
        <div class="label">${t.asn}</div>
        <div class="value">${asn}</div>
      </div>
    </div>
    <button id="mapToggle">${t.showMap}</button>
    <div id="map" style="display: none; height: 300px; width: 100%; margin-top: 20px;"></div>
    <div class="language-selector">
      <a href="?lang=en">English</a>
      <a href="?lang=zh-TW">繁體中文</a>
      <a href="?lang=zh-CN">简体中文</a>
      <a href="?lang=ja">日本語</a>
      <a href="?lang=ko">한국어</a>
      <button id="darkModeToggle"><i class="fas fa-moon"></i></button>
    </div>
  </div>
  <footer>
    <a href="https://github.com/KKKKKCAT/CF-IPInfo/" target="_blank" rel="noopener noreferrer">${t.sourceCode}</a>
    <span style="margin-left: 10px; color: var(--primary-color);">ver:1.0.1</span>
  </footer>
  <script>
      const darkModeToggle = document.getElementById('darkModeToggle');
      const body = document.body;
      const mapToggle = document.getElementById('mapToggle');
      const mapContainer = document.getElementById('map');
      let map;

      darkModeToggle.addEventListener('click', () => {
          body.classList.toggle('dark-mode');
          const isDarkMode = body.classList.contains('dark-mode');
          darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
      });

      mapToggle.addEventListener('click', () => {
          if (mapContainer.style.display === 'none') {
          mapContainer.style.display = 'block';
          mapToggle.textContent = '${t.hideMap}';
          setTimeout(initMap, 0);
          } else {
          mapContainer.style.display = 'none';
          mapToggle.textContent = '${t.showMap}';
          }
      });

      function initMap() {
          if (!map) {
          map = L.map('map').setView([${latitude}, ${longitude}], 13);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
              maxZoom: 19
          }).addTo(map);
          L.marker([${latitude}, ${longitude}]).addTo(map)
              // .bindPopup('🐱')
              .openPopup();
          }
          map.invalidateSize();
      }
      </script>
      <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
</body>
</html>
`;

return new Response(html, {
  headers: { 'Content-Type': 'text/html;charset=UTF-8' },
});
}    
