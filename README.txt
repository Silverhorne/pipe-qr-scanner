PIPE QR SCANNER V2.2

NEW IN V2.2
- QR decoder library is bundled locally as html5-qrcode.min.js
- Scanner no longer depends on the UNPKG/CDN connection
- QR decoder is included in the service-worker offline cache
- Existing V2.1 scan data and all SeAH/JFE/manual-entry functionality remain unchanged

KNOWN RULES


SeAH:
Unique ID = final SeAH pipe section
Batch = preceding section

JFE:
Unique ID / Piece No. = final 5 characters of QR

New / Other:
Scan QR, then manually confirm manufacturer and unique Pipe/Piece No.

Manual Entry:
Use when QR is illegible or will not scan.
Full QR is left blank.
