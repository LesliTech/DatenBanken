### API reference
------
```
GET ★ /
GET ★ /api

POS   /api/auth/login
POS   /api/auth/registration
POS   /api/auth/password
PUT   /api/auth/password

POS   /api/token
DEL   /api/token/:tokenId

GET   /api/buckets
GET   /api/buckets/:bucketId
GET   /api/buckets/:bucketId/records
GET   /api/buckets/:bucketId/records/:recordId

GET   /api/accounts
DEL   /api/accounts/:accountId

GET   /api/accounts/users
POS   /api/accounts/users
GET   /api/accounts/users/:id
DEL   /api/accounts/users/:id
PUT   /api/accounts/users/:id
```