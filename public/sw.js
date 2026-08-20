// Kill-switch for leftover service workers (often from another app on localhost:3000).
// A 404 at /sw.js leaves the old worker in control forever; this file replaces it,
// clears caches, then unregisters itself.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
    })()
  );
});
