const CACHE_NAME = 'fantasia-rpg-v1';
const urlsToCache = [
  'index.html',
  'lore.html',
  'ciudades.html',
  'inventario.html',
  'npcs-eldoria.html',
  'mapa.html',
  'styles/main.css',
  'scripts/main.js',
  'favicon.ico',
  'manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});