// LINGUA Service Worker v6.5
// Neue Cache-Version erzwingt Browser-Refresh

const CACHE_VERSION = 'lingua-v65';

self.addEventListener('install', function(event) {
  // Sofort aktivieren ohne auf alten SW zu warten
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(name) { return name !== CACHE_VERSION; })
          .map(function(name) {
            console.log('[SW v65] Loesche alten Cache:', name);
            return caches.delete(name);
          })
      );
    }).then(function() {
      // Alle offenen Tabs sofort uebernehmen
      return self.clients.claim();
    }).then(function() {
      // Alle Clients zum Reload zwingen
      return self.clients.matchAll({type: 'window'});
    }).then(function(clients) {
      clients.forEach(function(client) {
        client.navigate(client.url);
      });
    })
  );
});

// Kein Caching - immer vom Netzwerk
self.addEventListener('fetch', function(event) {
  // index.html nie cachen
  if (event.request.url.endsWith('/') || 
      event.request.url.endsWith('index.html') ||
      event.request.url.endsWith('.html')) {
    event.respondWith(
      fetch(event.request, {cache: 'no-store'})
    );
    return;
  }
  event.respondWith(fetch(event.request));
});
