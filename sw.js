const filesToCache = [
  // PWA files
  "nt.webmanifest",
  // HTML files
  "index.html",
  "about.html",
  "gcd.html",
  // CSS files
  "styles/default.css",
  "styles/header.css",
  "styles/table.css",
  // Icons
  "icons/icon.svg",
  // Images
  "images/kofi.webp",
  "images/patreon.webp",
  "images/logo.webp",
  // JavaScript files
  "scripts/gcd.js",
  "scripts/ntlib.js",
  "scripts/util.js",
  "scripts/tests.js",
  // KaTeX files
  //// JavaScript
  "scripts/katex/auto-render.min.js",
  "scripts/katex/katex.min.js",
  //// CSS and fonts
  "styles/katex.min.css",
  "styles/fonts/KaTeX_AMS-Regular.ttf",
  "styles/fonts/KaTeX_AMS-Regular.woff",
  "styles/fonts/KaTeX_AMS-Regular.woff2",
  "styles/fonts/KaTeX_Caligraphic-Bold.ttf",
  "styles/fonts/KaTeX_Caligraphic-Bold.woff",
  "styles/fonts/KaTeX_Caligraphic-Bold.woff2",
  "styles/fonts/KaTeX_Caligraphic-Regular.ttf",
  "styles/fonts/KaTeX_Caligraphic-Regular.woff",
  "styles/fonts/KaTeX_Caligraphic-Regular.woff2",
  "styles/fonts/KaTeX_Fraktur-Bold.ttf",
  "styles/fonts/KaTeX_Fraktur-Bold.woff",
  "styles/fonts/KaTeX_Fraktur-Bold.woff2",
  "styles/fonts/KaTeX_Fraktur-Regular.ttf",
  "styles/fonts/KaTeX_Fraktur-Regular.woff",
  "styles/fonts/KaTeX_Fraktur-Regular.woff2",
  "styles/fonts/KaTeX_Main-Bold.ttf",
  "styles/fonts/KaTeX_Main-Bold.woff",
  "styles/fonts/KaTeX_Main-Bold.woff2",
  "styles/fonts/KaTeX_Main-BoldItalic.ttf",
  "styles/fonts/KaTeX_Main-BoldItalic.woff",
  "styles/fonts/KaTeX_Main-BoldItalic.woff2",
  "styles/fonts/KaTeX_Main-Italic.ttf",
  "styles/fonts/KaTeX_Main-Italic.woff",
  "styles/fonts/KaTeX_Main-Italic.woff2",
  "styles/fonts/KaTeX_Main-Regular.ttf",
  "styles/fonts/KaTeX_Main-Regular.woff",
  "styles/fonts/KaTeX_Main-Regular.woff2",
  "styles/fonts/KaTeX_Math-BoldItalic.ttf",
  "styles/fonts/KaTeX_Math-BoldItalic.woff",
  "styles/fonts/KaTeX_Math-BoldItalic.woff2",
  "styles/fonts/KaTeX_Math-Italic.ttf",
  "styles/fonts/KaTeX_Math-Italic.woff",
  "styles/fonts/KaTeX_Math-Italic.woff2",
  "styles/fonts/KaTeX_SansSerif-Bold.ttf",
  "styles/fonts/KaTeX_SansSerif-Bold.woff",
  "styles/fonts/KaTeX_SansSerif-Bold.woff2",
  "styles/fonts/KaTeX_SansSerif-Italic.ttf",
  "styles/fonts/KaTeX_SansSerif-Italic.woff",
  "styles/fonts/KaTeX_SansSerif-Italic.woff2",
  "styles/fonts/KaTeX_SansSerif-Regular.ttf",
  "styles/fonts/KaTeX_SansSerif-Regular.woff",
  "styles/fonts/KaTeX_SansSerif-Regular.woff2",
  "styles/fonts/KaTeX_Script-Regular.ttf",
  "styles/fonts/KaTeX_Script-Regular.woff",
  "styles/fonts/KaTeX_Script-Regular.woff2",
  "styles/fonts/KaTeX_Size1-Regular.ttf",
  "styles/fonts/KaTeX_Size1-Regular.woff",
  "styles/fonts/KaTeX_Size1-Regular.woff2",
  "styles/fonts/KaTeX_Size2-Regular.ttf",
  "styles/fonts/KaTeX_Size2-Regular.woff",
  "styles/fonts/KaTeX_Size2-Regular.woff2",
  "styles/fonts/KaTeX_Size3-Regular.ttf",
  "styles/fonts/KaTeX_Size3-Regular.woff",
  "styles/fonts/KaTeX_Size3-Regular.woff2",
  "styles/fonts/KaTeX_Size4-Regular.ttf",
  "styles/fonts/KaTeX_Size4-Regular.woff",
  "styles/fonts/KaTeX_Size4-Regular.woff2",
  "styles/fonts/KaTeX_Typewriter-Regular.ttf",
  "styles/fonts/KaTeX_Typewriter-Regular.woff",
  "styles/fonts/KaTeX_Typewriter-Regular.woff2",
];

const version = "0.1.0";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(version).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached_response) => {
      return cached_response || fetch(event.request);
    })
  );
});

this.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) {
            return key.indexOf(version) !== 0;
          })
          .map(function (key) {
            return caches.delete(key);
          })
      );
    })
  );
});
