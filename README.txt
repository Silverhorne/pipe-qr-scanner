PIPE QR SCANNER V2.3

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


NEW IN V2.3
- Field UI cleanup only; scanning/data logic retained from V2.2.
- Reduced page padding and vertical spacing.
- Shorter camera/scanning window to reduce scrolling.
- Count/status stay visually prominent while scanning.
- Saved Scans changed from a wide table to compact phone-friendly records.
- Saved Scans display newest entry first.
- Existing local data continues to use the V2.2/V2.1 storage model.
