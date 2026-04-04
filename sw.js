const CACHE_NAME = 'history-game-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './questions.js',
  './quiz_data.js',
  './cards.js',
  './assets/images/logo_pop_kabuto.png',
  './assets/images/icon-192.png',
  './assets/images/icon-512.png',
  './assets/audio/newbgm.m4a',
  './assets/audio/se_decision.mp3',
  './assets/audio/se_cancel.mp3',
  './assets/audio/se_slash.mp3',
  './assets/audio/se_battle.mp3',
  './assets/audio/se_click.mp3',
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache v2');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate Event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event
self.addEventListener('fetch', (event) => {
  if (!event.request.url.startsWith(self.location.origin)) return;

  const url = new URL(event.request.url);
  const isMedia = url.pathname.match(/\.(png|jpg|jpeg|gif|svg|webp|m4a|mp3)$/);

  if (isMedia) {
    // Cache First for Images/Audio
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        return fetch(event.request).then((response) => {
          if (response.status === 200) {
            const cacheCopy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, cacheCopy));
          }
          return response;
        });
      })
    );
  } else {
    // Network First (with fallback) for everything else
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.status === 200) {
            const cacheCopy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, cacheCopy));
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
  }
});
