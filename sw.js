const CACHE_NAME = 'lingua-v94';

// Domains die immer direkt ans Netzwerk gehen (nie gecacht)
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
  // Sofort aktivieren, nicht auf alte Clients warten
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(['./index.html', './manifest.json']))
  );
});

self.addEventListener('activate', e => {
  // Alle alten Caches loeschen
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => {
        console.log('[SW] Alter Cache geloescht:', k);
        return caches.delete(k);
      }))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;

  // Externe API-Calls: immer direkt ans Netzwerk
  if (NETWORK_ONLY.some(domain => url.includes(domain))) {
    e.respondWith(
      fetch(e.request).catch(err =>
        new Response(JSON.stringify({ error: err.message }), {
          status: 503,
          headers: { 'Content-Type': 'application/json' }
        })
      )
    );
    return;
  }

  // Lokale Assets: Network-First (immer aktuell), Cache als Fallback
  e.respondWith(
    fetch(e.request)
      .then(response => {
        // Erfolgreiche Antwort im Cache speichern
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      })
      .catch(() => {
        // Offline: aus Cache laden
        return caches.match(e.request);
      })
  );
});
