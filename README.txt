PIPE QR SCANNER V2.1

NEW IN V2.1
- Manual Entry button for illegible/unscannable QR codes
- Manual entry uses the same Manufacturer + Unique ID duplicate check as QR scans
- Optional Batch / Heat on manual entries
- Optional Note field; defaults to "QR illegible"
- Entry Method saved as "QR Scan" or "Manual Entry"
- Entry Method and Note added to CSV export
- V2 local data migrates automatically into V2.1
- Existing SeAH, JFE, and New/Other QR workflows retained
- Service worker updated to prefer the latest network version and remove old app caches

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
