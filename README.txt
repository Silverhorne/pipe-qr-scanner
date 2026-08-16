Pipe QR Scanner V2.3.2
========================

Changes from V2.3.1:
- Adds a 3-second scanner lockout immediately after any successful QR capture.
- Removes local duplicate blocking so repeated Piece Numbers are still saved and uploaded.
- Duplicate investigation is handled in SharePoint/Power Automate using the Duplicate column.
- Blank Piece Numbers remain valid for bulk/heat-only material and are not treated as duplicates by the configured flow.
- Bumps the service-worker cache so deployed devices receive the update.

Upload all files in this folder to the GitHub Pages repository root.
