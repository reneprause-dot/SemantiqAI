// LINGUA Service Worker - Cache-Cleaner
// Löscht alle alten Caches und deregistriert sich selbst
// um Browser-Cache-Probleme zu vermeiden

const CACHE_VERSION = 'lingua-v71';

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    // Alle alten Caches löschen
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(name) { return name !== CACHE_VERSION; })
          .map(function(name) {
            console.log('[SW] Lösche alten Cache:', name);
            return caches.delete(name);
          })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Kein Caching - immer vom Netzwerk laden
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});
