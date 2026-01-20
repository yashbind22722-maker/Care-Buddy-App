self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(clients.claim()));

// Background Alarm Check
setInterval(() => {
    // Ye browser ko jagaye rakhega thodi der
}, 30000);

self.addEventListener('push', (event) => {
    const options = {
        body: 'Dawai ka waqt ho gaya hai bhai!',
        icon: 'https://cdn-icons-png.flaticon.com/512/822/822143.png',
        vibrate: [200, 100, 200]
    };
    event.waitUntil(self.registration.showNotification('Care Buddy Alarm', options));
});
