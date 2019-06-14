"use strict";

// Incrementing CACHE_VERSION will kick off the install event and force previously cached
// resources to be cached again.
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js',
  '/fonts/bebas/BebasNeue-Bold.woff'
];

self.addEventListener('install', event => {
  event.waitUntil(
      caches.open(CACHE_NAME)
          .then(function (cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
          })
  );
});

self.addEventListener('activate', function(event) {

  var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

  event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
            cacheNames.map(function(cacheName) {
              if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
              }
            })
        );
      })
  );
});

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate' ||
      (event.request.method === 'GET' &&
          event.request.headers.get('accept').includes('text/html'))) {
    console.log('Handling fetch event for', event.request.url);
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
              if (response) {
                return response;
              }
              return fetch(event.request).then(
                  function (response) {
                    // Check if we received a valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                      return response;
                    }

                    var responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(function (cache) {
                          cache.put(event.request, responseToCache);
                        });
                    return response;
                  }
              );
            })
    );
  }
});
