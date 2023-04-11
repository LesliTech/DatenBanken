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


// · Including framework and controllers
const DatenBankenController = require("../datenbanken")
const { database } = require("../../system/database")


//  · 
class BucketController extends DatenBankenController {


    // · Get collection
    getBuckets(request, response){
        
        database.read({ database: "buckets" }).then(result => {

            super.respondWithSuccessful(response, result.buckets)

        }).catch(error => {

            console.log(error);

            super.responseWithError(response, "000000", "error", error)

        })

    }

    // · Create Collection
    postCollection(request, response) {

        collection.create({
            database: "buckets",
            collection: request.params.bucket
        }).then(result => {
            super.respondWithSuccessful(response, { bucket: request.params.bucket })

        })

    }
}

module.exports = new BucketController
