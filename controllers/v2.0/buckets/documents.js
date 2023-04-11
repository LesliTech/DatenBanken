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
const DatenBankenController = require("../../datenbanken")
const { document } = require("./../../../system/database")


//  ·
class BucketDocumentController extends DatenBankenController {

    getDocuments(request, response) {

        let query = {}

        if (Object.keys(request.query).length > 0) {

            query = request.query

        }

        document.find({
            database: "buckets",
            collection: request.params.bucket
        }, query).then(result => {

            super.respondWithSuccessful(response, result)

        }).catch(error => {

            super.debug.error(error)
            super.responseWithError(response, "000000", "error", error)

        })

    }

    getDocumentFirst(request, response){

        document.first({
            database: "buckets",
            collection: request.params.bucket
        }).then(result => {

            super.respondWithSuccessful(response, result)

        }).catch(error => {

            console.log(error);
            super.responseWithError(response, "000000", "error", error)

        })
    }

    getDocumentLast(request, response){

        document.find({
            database: "buckets",
            collection: request.params.bucket
        }, {
            limit: 1
        }).then(result => {

            super.respondWithSuccessful(response, result)

        }).catch(error => {

            console.log(error);
            super.responseWithError(response, "000000", "error", error)

        })
    }

    postDocument(request, response){

        document.create({
            database: "buckets",
            collection: request.params.bucket
        },  request.body ).then(result => {

            super.respondWithSuccessful(response, result)

        }).catch(error => {query

            console.log(error);
            super.responseWithError(response, "000000", "error", error)

        })

    }

}


// ·
module.exports = new BucketDocumentController
