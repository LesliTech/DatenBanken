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
DEL   /api/token/:token

GET ★ /api/database

GET ★ /api/buckets

GET ★ /api/buckets/:bucket
POS ★ /api/buckets/:bucket

GET ★ /api/buckets/:bucket/documents
GET ★ /api/buckets/:bucket/documents/first
GET ★ /api/buckets/:bucket/documents/last

GET   /api/accounts
DEL   /api/accounts/:accountId

GET   /api/accounts/users
POS   /api/accounts/users
GET   /api/accounts/users/:id
DEL   /api/accounts/users/:id
PUT   /api/accounts/users/:id
```
