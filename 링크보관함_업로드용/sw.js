// 설치 가능 조건용 최소 서비스워커. 데이터는 항상 네트워크에서 가져온다.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
