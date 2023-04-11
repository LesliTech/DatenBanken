"use strict"
/*
Lesli

Copyright (c) 2023, Lesli Technologies, S. A.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.

ProjectRaven - Backend platform for apps, websites and IoT devices

Powered by https://www.lesli.tech
Building a better future, one line of code at a time.

@contact  <hello@lesli.tech>
@website  <https://lesli.tech>
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/


// · Import frameworks, libraries, tools and apps
const cors = require("cors")
const helmet = require("helmet")
const express = require("express")
const bodyParser = require("body-parser")



// · Building app
const app = express()



// · setting cors
app.use(cors({ origin: "*" }))



// · protecting api server
app.use(helmet())
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ extended: false }))



// · Import DatenBanken routes
const infoRoutes = require("./routers/info")
const databaseRoutes = require("./routers/v2.0/database")
const bucketRoutes = require("./routers/v2.0/buckets")


// · 
app.use((req, res, next) => {
    //console.log('Time:', Date.now(), req.originalUrl)
    next()
})


// · DatenBanken routes
app.use("/api", infoRoutes)
app.use("/api/v2.0/database", databaseRoutes)
app.use("/api/v2.0/buckets", bucketRoutes)



// app.use((req, res, next) => {
//     res.status(404).send("<h1>Page not found on the server</h1>")

//     //const statusCode = err.statusCode || 500;
//     //console.error(err.message, err.stack);
//     //res.status(statusCode).json({'message': err.message});
// })



module.exports = app
