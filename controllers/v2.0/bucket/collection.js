"use strict"
/*
ProjectRaven

Copyright (c) 2020, Lesli Technologies, S. A.

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

@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html
@version  0.1.0-alpha

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/


// · Including framework and controllers
const RavenController = require("./../raven")
const { database, collection } = require("../../../system/database")


//  · 
// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
class BucketController extends RavenController {

    get_collections(request, response) {

        // · Return all buckets 
        collection.index({
            database: "buckets"
        }).then(result => {

            super.respondWithSuccessful(response, result)

        }).catch(error => {

            console.log(error)

            super.debug.error(error)
            super.responseWithError(response, "000000", "error", error)

        })

    }

    // · Get collection
    get_collection(request, response){
        
        collection.read({
            database: "buckets",
            collection: request.params.bucket
        }).then(result => {

            super.respondWithSuccessful(response, result)

        }).catch(error => {

            console.log(error);

            super.responseWithError(response, "000000", "error", error)

        })

    }

    // · Create Collection
    post_collection(request, response){

        collection.create({
            database: "buckets",
            collection: request.params.bucket
        }).then(result => {

            super.respondWithSuccessful(response, { instance: result.namespace })

        }).catch(error => {

            console.log(error);
            super.responseWithError(response, "000000", "error", error)

        })

    }

    // · Rename a collection
    put_collection(request, response){

        collection.rename({
            database: "buckets",
            collection: request.params.bucket,
            new_collection_name: request.body.newName
        }).then(result => {

            super.respondWithSuccessful(response, result)

        }).catch(error => {

            console.log(error);

            super.responseWithError(response, "000000", "error", error)

        })

    }

    // · Delete a collection
    delete_collection(request, response){

        collection.delete({
            database: "buckets",
            collection: request.params.bucket
        }).then(result => {

            super.respondWithSuccessful(response, result)

        }).catch(error => {

            console.log(error);

            super.responseWithError(response, "000000", "error", error)

        })

    }

}

module.exports = new BucketController