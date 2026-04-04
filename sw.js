const CACHE_NAME = 'history-game-v1';
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
  // Audio
  './assets/audio/newbgm.m4a',
  './assets/audio/se_decision.mp3',
  './assets/audio/se_cancel.mp3',
  './assets/audio/se_slash.mp3',
  './assets/audio/se_battle.mp3',
  './assets/audio/se_click.mp3',
  './assets/audio/boss1.mp3',
  './assets/audio/boss2.mp3',
  './assets/audio/BGM2.mp3',
  // Core Images
  './assets/images/enemy_samurai.png',
  './assets/images/enemy_ninja.png',
  './assets/images/enemy_shogun.png',
  './assets/images/enemy_ronin.png',
  './assets/images/enemy_ashigaru.png',
  './assets/images/enemy_monk.png',
  './assets/images/enemy_general.png',
  './assets/images/enemy_kimoneko.png',
  './assets/images/enemy_kyoshinneko.png',
  './assets/images/enemy_inuyasha.png',
  './assets/images/enemy_sesshomaru.png',
  './assets/images/enemy_nekogamisama.png',
  './assets/images/enemy_maou.png',
  './assets/images/enemy_daimaou.png'
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate Event (Cleanup old caches)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch Event (Network First, then Cache)
// This strategy ensures that if the user is online, they get the latest data (Firebase),
// but if they are offline, they get the cached assets.
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests (like Firebase SDK or Google Fonts)
  // as they have their own caching/CORS policies.
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If network request succeeds, clone it to cache for future offline use
        if (event.request.method === 'GET' && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // If network fails (offline), try to find it in cache
        return caches.match(event.request);
      })
  );
});
