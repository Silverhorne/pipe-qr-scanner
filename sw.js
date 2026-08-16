const CACHE="pipe-qr-v2-2";
const ASSETS=["./","./index.html","./manifest.webmanifest","./html5-qrcode.min.js"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(Promise.all([
  self.clients.claim(),
  caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
])));
self.addEventListener("fetch",e=>{
  e.respondWith(fetch(e.request).then(resp=>{
    if(e.request.method==="GET"&&new URL(e.request.url).origin===location.origin){
      const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));
    }
    return resp;
  }).catch(()=>caches.match(e.request)));
});
