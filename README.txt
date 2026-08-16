PIPE QR SCANNER V2

NEW IN V2
- Manufacturer selector: SeAH / JFE / New-Other
- SeAH automatic parsing retained
- JFE automatic Piece No. parsing: final 5 QR characters
- New/Other workflow: scan QR, then manually enter manufacturer and unique Pipe/Piece No.
- Duplicate key changed to Manufacturer + Unique ID
- Manufacturer added to saved scans and CSV export
- V1 local scan data is migrated as SeAH records when V2 first loads

KNOWN RULES
SeAH example:
5032674-001-001-SPA6092030-2606J0389
Unique ID: 2606J0389
Batch: SPA6092030

JFE example:
31255E11676001658051048910489
Unique ID / Piece No.: 10489

NEW / OTHER
No QR structure is assumed. The user scans the QR and manually enters manufacturer and unique Pipe/Piece No.

IMPORTANT
V2 still loads html5-qrcode from a CDN. A later revision should bundle it locally for dependable offline use.
