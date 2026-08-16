PIPE QR SCANNER V1

Files:
- index.html
- manifest.webmanifest
- sw.js

TESTING / HOSTING
Camera access from a mobile browser requires HTTPS (or localhost).
Upload these files to an HTTPS web host such as GitHub Pages.

FIRST USE
1. Open the hosted URL on the phone while online.
2. Allow camera permission.
3. Enter Scanned By and Stockpile / Location.
4. Tap Start Scanner.
5. Scan QR codes continuously.
6. Export CSV when finished.

DATA
Scans are stored locally in the browser on that device.
Pipe No. is treated as the unique identifier for duplicate detection.

EXPECTED QR ENDING
...-BATCHNO-PIPENO

Example:
5032674-001-001-SPA6092030-2606J0389
Batch: SPA6092030
Pipe: 2606J0389

IMPORTANT
V1 loads the QR decoding library from a CDN. After the first successful online load,
the app shell can be cached, but fully dependable offline operation should bundle the
decoder locally in a later revision.
