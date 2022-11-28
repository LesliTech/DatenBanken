## API
```
/apii/auth/login
/apii/auth/registration

/api/buckets
/api/buckets/:bucket
/api/buckets/:bucket/records
/api/buckets/:bucket/records/:record

/api/accounts

/api/management/users
/api/management/users/new
/api/management/users/:id
/api/management/users/:id/edit

/api/reports
```



<p align="center">
    <img width="200px" alt="ProjectRaven logo" src="./projectraven-logo.svg" />
</p>

<h3 align="center">Backend platform for apps, websites and IoT devices</h3>

<hr/>

<br/>

#### HTTP API endpoints
```
/  
/api  
/api/auth  
/api/bucket  
/api/device  

POST ★ /api/wss/topic/:topic_id
POST ★ /api/wss/channel/:channel_id/message

/api/server/log  
/api/server/statistic  
/api/management/device  
/api/management/user  
/api/management/app
/api/service/log  
/api/service/mail  
/api/service/webhook  
/api/service/mqtt


GET ★ /
GET ★ /api

POS ★ /api/auth/login
POS ★ /api/auth/registration

GET ★ /api/management/users
POS ★ /api/management/users
PUT ★ /api/management/users/:user_id
PUT ★ /api/management/users/password/:user_id
DEL ★ /api/management/users/:user_id


GET ★ /api/device
GET ★ /api/devices/:device_id
GET   /api/device/:device/data
GET   /api/device/:device/event
GET   /api/device/:device/error
GET   /api/device/:device/action
GET   /api/device/:device/warning
GET ★ /api/device/:device/documents

POST  /api/device/config

GET   /api/device/:device/documents?last=N
GET   /api/device/:device/documents?skip=N
GET   /api/device/:device/documents?limit=N

GET   /api/device/:device/documents?group=property
GET   /api/device/:device/documents?start=date&end=date  
GET   /api/device/:device/documents?range=date:date  

GET   /api/server/log/mqtt/server-ready
GET   /api/server/log/mqtt/client-connected  
GET   /api/server/log/mqtt/message-published  
GET   /api/server/log/mqtt/client-disconnected  
GET   /api/server/log/mqtt/listener-subscribe  
GET   /api/server/log/mqtt/error  

GET   /api/server/statistics  
GET   /api/server/statistics/database  

GET   /api/management
GET   /api/management/device  
GET   /api/management/user  
GET   /api/management/app
GET   /api/management/app/:name

GET   /api/service/log  
GET   /api/service/mail  
GET   /api/service/webhook  
POST  /api/service/notifications/

POST  /api/excel/report

```

#### Database specification
```
    project-raven-management
        collections
            users
                _id
                account_id
            accounts
                _id
                company_name
                owner_id
    project-raven-devices
        collection
            devices
                _id
                account_id

```

#### HTTP API endpoints - New Version
```
POST    ★ /api/management/authentication
POST    ★ /api/management/registration // has to change "just register an account"
        Create the account and its user, both at the same time (the owner)
        company_name, email and password
        ENDPOINTS for all

POST    ★ /api/management/accounts
GET     ★ /api/management/accounts
PUT     ★ /api/management/accounts/:id
DELETE  ★ /api/management/accounts/:id

        ★ /api/management/invite
        This one creates normal users by an account (only owner has access)

GET      /api/management/users/:user_id/account/:account_id
PUT      /api/management/users/:user_id/account/:account_id
DELETE   /api/management/users/:user_id/account/:account_id

GET      /api/devices/:devices_id/account/:account_id
PUT      /api/devices/:devices_id/account/:account_id
DELETE   /api/devices/:devices_id/account/:account_id

GET   /api/devices
DEL   /api/devices/:device_id
GET   /api/device/:device/config? 
GET   /api/devices/:device_id/report/:date
GET   /api/devices/:device_id/report/alert
GET   /api/devices/:device_id/report/data
PUT   /api/devices/:device_id
PUT   /api/devices/:device_id/unrelate
PUT   /api/devices/:device_id/relate_petition

GET /api/accounts/:account_id/devices
GET /api/accounts/:account_id/users
DEL /api/accounts/:account_id/users
POST /api/accounts/:account_id/invite

GET /api/users/registration
GET /api/users/authentication
POST /api/users/confirm_invite

PUT /api/management/users/:user_id/set_role






```
