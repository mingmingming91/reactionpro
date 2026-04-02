# ⚡ 反應力測試 Pro (Reaction Timer PWA)

這是一個基於 Web 技術開發的高精度反應力測試工具。支援 **PWA (Progressive Web App)**，可以安裝至手機或電腦桌面，並支援離線使用。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![PWA](https://img.shields.io/badge/PWA-Ready-orange.svg)
![Chart.js](https://img.shields.io/badge/Chart.js-v4-green.svg)

## 🚀 功能特點

- **高精度計時**：使用 `performance.now()` 確保毫秒級的精確度。
- **數據統計**：紀錄最近 10 次的反應時間，並自動計算最佳成績與平均值。
- **趨勢圖表**：整合 [Chart.js](https://www.chartjs.org/)，直觀呈現你的進步曲線。
- **等級評分**：根據反應速度給予「神速」、「敏捷」、「正常」或「遲緩」的評價。
- **PWA 支援**：
  - 可安裝至主畫面（Add to Home Screen）。
  - 支援離線瀏覽（透過 Service Worker 快取）。
  - 獨立視窗運行，無瀏覽器網址列干擾。

## 🛠️ 技術棧

- **Frontend**: HTML5, CSS3 (Grid & Flexbox), Vanilla JavaScript
- **Library**: [Chart.js](https://cdn.jsdelivr.net/npm/chart.js)
- **PWA**: Web App Manifest, Service Worker (Cache API)

## 📦 如何在本地運行

1. **複製專案**
   ```bash
   git clone [https://github.com/你的帳號/你的倉庫名.git](https://github.com/你的帳號/你的倉庫名.git)
