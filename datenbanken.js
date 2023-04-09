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
const app = require("./app")
const debug = require("lesli-js").debug.nodejs


// · Get environment mode from start command
const production = process.argv.includes("--production")


// · Set environment mode
process.env.NODE_ENV = (production ? "production" : "development")


// · Import & build configuration
const config = require("lesli-nodejs-configuration")


// · Import DatenBanken routes
const infoRoutes = require("./routers/info")


// DatenBanken routes
app.use("/api", infoRoutes)

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})


app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found on the server</h1>")

    //const statusCode = err.statusCode || 500;
    //console.error(err.message, err.stack);
    //res.status(statusCode).json({'message': err.message});
})


// · 
app.listen(config.port, () => {
    debug.info(`DatenBanken server listening at http://localhost:${ config.port }`)
});
