const CACHE_NAME = 'history-game-v3';
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
  // Card and Item Images (Auto-generated list)
  './assets/images/card_chikamatsu_1771336801350.png',
  './assets/images/card_chikamatsu_1771336801350_down_1772196684258.png',
  './assets/images/card_chikamatsu_1771336801350_up_1772196670472.png',
  './assets/images/card_fukuzawa_1771335926223.png',
  './assets/images/card_fukuzawa_1771335926223_down_1772196708261.png',
  './assets/images/card_fukuzawa_1771335926223_up_1772196695988.png',
  './assets/images/card_ganjin_1771334875863.png',
  './assets/images/card_ganjin_1771334875863_down_1772087377242.png',
  './assets/images/card_ganjin_1771334875863_up_1772087149961.png',
  './assets/images/card_gyoki_1771334846901.png',
  './assets/images/card_gyoki_1771334846901_down_1772086834962.png',
  './assets/images/card_gyoki_1771334846901_up_1772086488011.png',
  './assets/images/card_hideyoshi_1771331116985.png',
  './assets/images/card_hideyoshi_1771331116985_down_1772196738869.png',
  './assets/images/card_hideyoshi_1771331116985_up_1772196722845.png',
  './assets/images/card_himiko_1771327623087.png',
  './assets/images/card_himiko_1771327623087_down_1772085886837.png',
  './assets/images/card_himiko_1771327623087_up_1772085814896.png',
  './assets/images/card_iemitsu_1771335393732.png',
  './assets/images/card_iemitsu_1771335393732_down_1772196857358.png',
  './assets/images/card_iemitsu_1771335393732_up_1772196785212.png',
  './assets/images/card_ieyasu_1771327641028.png',
  './assets/images/card_ieyasu_1771327641028_down_1772196769013.png',
  './assets/images/card_ieyasu_1771327641028_up_1772196756746.png',
  './assets/images/card_imoko_1771331521760.png',
  './assets/images/card_ino_1771336943022.png',
  './assets/images/card_ino_1771336943022_down_1772196884440.png',
  './assets/images/card_ino_1771336943022_up_1772196870453.png',
  './assets/images/card_itagaki_1771335688261.png',
  './assets/images/card_itagaki_1771335688261_down_1772336031546.png',
  './assets/images/card_itagaki_1771335688261_up_1772196896817.png',
  './assets/images/card_ito_1771335811400.png',
  './assets/images/card_ito_1771335811400_down_1772196937903.png',
  './assets/images/card_ito_1771335811400_up_1772196927890.png',
  './assets/images/card_kamatari_1771331574326.png',
  './assets/images/card_kamatari_1771331574326_down_1772086123530.png',
  './assets/images/card_kamatari_1771331574326_up_1772110264349.png',
  './assets/images/card_kiyomori_1771335031022.png',
  './assets/images/card_kiyomori_1771335031022_down_1772088286331.png',
  './assets/images/card_kiyomori_1771335031022_up_1772088112345.png',
  './assets/images/card_komura_1771336028802.png',
  './assets/images/card_macarthur_1771336491426.png',
  './assets/images/card_macarthur_1771336491426_down_1772110989649.png',
  './assets/images/card_macarthur_1771336491426_up_1772110967046.png',
  './assets/images/card_masako_1771335130916.png',
  './assets/images/card_masako_1771335130916_down_1772110332889.png',
  './assets/images/card_masako_1771335130916_up_1772110310736.png',
  './assets/images/card_michinaga_1771334912735.png',
  './assets/images/card_michinaga_1771334912735_down_1772087682255.png',
  './assets/images/card_michinaga_1771334912735_up_1772087572432.png',
  './assets/images/card_murasaki_new_1771334947275.png',
  './assets/images/card_murasaki_new_1771334947275_down_1772087993696.png',
  './assets/images/card_murasaki_new_1771334947275_up_1772087764869.png',
  './assets/images/card_mutsu_1771337139327.png',
  './assets/images/card_mutsu_1771337139327_down_1772240205165.png',
  './assets/images/card_mutsu_1771337139327_up_1772240185574.png',
  './assets/images/card_nakanooe_1771331544522.png',
  './assets/images/card_nakanooe_1771331544522_down_1772110244770.png',
  './assets/images/card_nakanooe_1771331544522_up_1772239929292.png',
  './assets/images/card_nobunaga_1771328819637.png',
  './assets/images/card_nobunaga_1771328819637_down_1772240010610.png',
  './assets/images/card_nobunaga_1771328819637_up_1772239995390.png',
  './assets/images/card_noguchi_1771336242704.png',
  './assets/images/card_noguchi_1771336242704_up_1772240219720.png',
  './assets/images/card_okubo_1771335625732.png',
  './assets/images/card_okubo_1771335625732_up_1772110921360.png',
  './assets/images/card_perry_1771335515879.png',
  './assets/images/card_perry_1771335515879_down_1772240088433.png',
  './assets/images/card_perry_1771335515879_up_1772240067567.png',
  './assets/images/card_ryoma_1771327587698.png',
  './assets/images/card_ryoma_1771327587698_down_1772240141743.png',
  './assets/images/card_ryoma_1771327587698_up_1772240127093.png',
  './assets/images/card_saigo_1771331182238.png',
  './assets/images/Saigo_down_placeholder.png', // Correcting common names if needed
  './assets/images/card_saigo_1771331182238_down_1772240173273.png',
  './assets/images/card_saigo_1771331182238_up_1772240157900.png',
  './assets/images/card_shomu_1771331595763.png',
  './assets/images/card_shomu_1771331595763_down_1772086310177.png',
  './assets/images/card_shomu_1771331595763_up_1772086231756.png',
  './assets/images/card_shotoku_1771327605575.png',
  './assets/images/card_shotoku_1771327605575_down_1772110182244.png',
  './assets/images/card_shotoku_1771327605575_up_1772085984853.png',
  './assets/images/card_tokimune_1771336608169.png',
  './assets/images/card_yoritomo_1771335087716.png',
  './assets/images/card_yoritomo_1771335087716_down_1772110289059.png',
  './assets/images/card_yoritomo_1771335087716_up_1772088454649.png',
  './assets/images/card_yoshimitsu_1771335314852.png',
  './assets/images/card_yoshimitsu_1771335314852_down_1772239979274.png',
  './assets/images/card_yoshimitsu_1771335314852_up_1772239961918.png',
  './assets/images/card_yoshimune_1771335425803.png',
  './assets/images/card_yoshimune_1771335425803_down_1772240045285.png',
  './assets/images/card_yoshimune_1771335425803_up_1772240030072.png',
  // Items
  './assets/images/item_ashio.png',
  './assets/images/item_azuchi.png',
  './assets/images/item_banpaku.png',
  './assets/images/item_bill.png',
  './assets/images/item_biwa.png',
  './assets/images/item_bubble.png',
  './assets/images/item_chadogu.png',
  './assets/images/item_choju.png',
  './assets/images/item_dejima.png',
  './assets/images/item_dotaku.png',
  './assets/images/item_famicom.png',
  './assets/images/item_fudoki.png',
  './assets/images/item_fugaku.png',
  './assets/images/item_fuhonsen.png',
  './assets/images/item_fumie.png',
  './assets/images/item_genjiemaki.png',
  './assets/images/item_gokajo.png',
  './assets/images/item_gyokuon.png',
  './assets/images/item_haniwa.png',
  './assets/images/item_heike.png',
  './assets/images/item_hinawaju.png',
  './assets/images/item_hizakurige.png',
  './assets/images/item_inozu.png',
  './assets/images/item_kaitai.png',
  './assets/images/item_kana.png',
  './assets/images/item_karesansui.png',
  './assets/images/item_kinin.png',
  './assets/images/item_kofun.png',
  './assets/images/item_kojiki.png',
  './assets/images/item_kongorikishi.png',
  './assets/images/item_manyoshu.png',
  './assets/images/item_meijikenpo.png',
  './assets/images/item_moko.png',
  './assets/images/item_moronobu.png',
  './assets/images/item_nanban.png',
  './assets/images/item_nihonkokenpo.png',
  './assets/images/item_nihonshoki.png',
  './assets/images/item_noh.png',
  './assets/images/item_okuno.png',
  './assets/images/item_radio.png',
  './assets/images/item_rakuichi.png',
  './assets/images/item_rokumeikan.png',
  './assets/images/item_sanshu.png',
  './assets/images/item_senkyo.png',
  './assets/images/item_senninbari.png',
  './assets/images/item_shindenzukuri.png',
  './assets/images/item_shinkansen.png',
  './assets/images/item_shoin.png',
  './assets/images/item_shuinsen.png',
  './assets/images/item_skytree.png',
  './assets/images/item_sonezaki.png',
  './assets/images/item_suiboku.png',
  './assets/images/item_takamatsuzuka.png',
  './assets/images/item_tax.png',
  './assets/images/item_tokyotower.png',
  './assets/images/item_tomioka.png',
  './assets/images/item_wadokaichin.png',
  './assets/images/item_yamiichi.png',
  './assets/images/item_yawata.png',
  // Enemies
  './assets/images/enemy_ashigaru.png',
  './assets/images/enemy_general.png',
  './assets/images/enemy_inuyasha.png',
  './assets/images/enemy_kimoneko.png',
  './assets/images/enemy_kunoichi.png',
  './assets/images/enemy_kyoshinneko.png',
  './assets/images/enemy_monk.png',
  './assets/images/enemy_nekogamisama.png',
  './assets/images/enemy_ninja.png',
  './assets/images/enemy_ronin.png',
  './assets/images/enemy_samurai_pop.png',
  './assets/images/enemy_sesshomaru.png',
  './assets/images/enemy_shogun.png',
  // Profile/Other Special
  './assets/images/imoko_down_1772343303943.png',
  './assets/images/imoko_up_1772343285906.png',
  './assets/images/okubo_down_1772343623295.png',
  './assets/images/tokimune_down_1772343263682.png',
  './assets/images/tokimune_up_1772343249550.png',
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache v3 (Full Assets)');
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
