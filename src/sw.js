import { registerRoute } from 'workbox-routing';
import { NetworkOnly } from 'workbox-strategies';

registerRoute(
  ({url, event}) => {
    return (url.pathname === '/home');
  },
  new NetworkOnly()  // or: CacheFirst/CacheOnly/StaleWhileRevalidate
);