/* timwin PWA service worker - cache do shell para instalar e abrir offline.
   Nao cacheia o webhook do Make (a resposta e sempre dinamica). */
var CACHE = "timwin-v2";
var SHELL = [
  "./",
  "./index.html",
  "./config.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(SHELL); }).then(function(){ return self.skipWaiting(); }));
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k!==CACHE; }).map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(e){
  var url = e.request.url;
  /* nunca intercepta a chamada ao Make (webhook) */
  if(url.indexOf("hook.") !== -1 || url.indexOf("make.com") !== -1){ return; }
  /* so trata GET do proprio app */
  if(e.request.method !== "GET"){ return; }
  e.respondWith(
    caches.match(e.request).then(function(hit){
      return hit || fetch(e.request).then(function(res){
        return res;
      }).catch(function(){ return caches.match("./index.html"); });
    })
  );
});
