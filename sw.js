self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(clients.claim()));

// Ye background mein browser ko batata rahega ki app zinda hai
self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'check-alarm') {
        // Alarm logic here
    }
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(clients.openWindow('/'));
});
