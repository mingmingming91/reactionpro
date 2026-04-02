const CACHE_NAME = 'reaction-v1';
const ASSETS = [
  'index.html',
  'https://cdn.jsdelivr.net/npm/chart.js' // 快取外部 library
];

// 安裝並快取資源
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 攔截請求，優先使用快取
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});