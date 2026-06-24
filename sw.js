// LINGUA Service Worker v100 — Network-First
const CACHE_NAME = 'lingua-v100';

const NETWORK_ONLY = [
  'api.anthropic.com',
  'api-free.deepl.com',
  'api.deepl.com',
  'allorigins.win',
  'workers.dev',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => c.addAll(['./index.html','./manifest.json']))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => {
        console.log('[SW] Cache geloescht:', k);
        return caches.delete(k);
      })))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  if (NETWORK_ONLY.some(d => url.includes(d))) {
    e.respondWith(fetch(e.request).catch(err =>
      new Response(JSON.stringify({error: err.message}), {
        status: 503, headers: {'Content-Type':'application/json'}
      })
    ));
    return;
  }
  // Network-First: immer aktuelle Version, Cache als Offline-Fallback
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
