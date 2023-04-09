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
const RavenController = require("../raven")
const { database, document } = require("../../../system/database")


//  ·
// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
class BucketCollectionDocumentController extends RavenController {


    // · Return all documents in a collection
    get_bucket_documents(request, response) {

        let query = {}

        if (Object.keys(request.query).length > 0) {

            query = request.query

        }

        database_collection_document.find({
            database: "buckets",
            collection: request.params.bucket
        }, query).then(result => {

            super.respondWithSuccessful(response, result)

        }).catch(error => {

            super.debug.error(error)
            super.responseWithError(response, "000000", "error", error)

        })

    }

    // · Create a new document in a collection
    post_bucket_documents(request, response) {

        database.database_collection_document_create({
            database: "buckets",
            collection: request.params.bucket
        }, request.body).then(result => {

            super.respondWithSuccessful(response, result)

        }).catch(error => {

            super.debug.error(error)
            super.responseWithError(response, "000000", "error", error)

        })

    }

    // · Return a documents in a specific bucket
    getBucketDocument(request, response) {

        databaseSystem.findDocument({
            schema: "buckets",
            collection: request.params.bucket
        }, {
            query: {
                _id: request.params.document_id
            }
        }).then(result => {

            super.respondWithSuccessful(response, result)

        }).catch(error => {

            super.debug.error(error)
            super.responseWithError(response, "000000", "error", error)

        })

    }

    // · Return a documents in a specific bucket
    putBucketDocument(request, response) {

        databaseSystem.updateDocument({
            schema: "buckets",
            collection: request.params.bucket
        }, {
            query: {
                _id: request.params.document_id
            }
        }, request.body).then(result => {

            super.respondWithSuccessful(response, result)

        }).catch(error => {

            super.debug.error(error)
            super.responseWithError(response, "000000", "error", error)

        })

    }

    post_document(request, response){

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

    get_documents(request, response){

        let query = (Object.keys(request.query).length > 0) ? request.query : {}

        document.find({
            database: "buckets",
            collection: request.params.bucket
        }, query).then(result => {

            super.respondWithSuccessful(response, result)

        }).catch(error => {

            console.log(error);
            super.responseWithError(response, "000000", "error", error)

        })

    }

    get_document(request, response){
        document.first({
            database: "buckets",
            collection: request.params.bucket
        }, {

        }).then(result => {

            super.respondWithSuccessful(response, result)

        }).catch(error => {

            console.log(error);
            super.responseWithError(response, "000000", "error", error)

        })
    }

    put_document(request, response){
        
        // Get the fields that will be updated or added
        let update = request.body;
        // Get the ID document to update
        let query = (request.params.document_id) ? {_id: request.params.document_id} : {}

        document.update({
            database: "buckets",
            collection: request.params.bucket
        }, query, update).then(result => {

            super.respondWithSuccessful(response, result)

        }).catch(error => {

            console.log(error);
            super.responseWithError(response, "000000", "error", error)

        })

    }

    delete_document(request, response) {
        
        // Get the ID document to delete
        let query = (request.params.document_id) ? {_id: request.params.document_id} : {}

        document.delete({
            database: "buckets",
            collection: request.params.bucket
        }, query ).then(result => {

            super.respondWithSuccessful(response, result)

        }).catch(error => {

            console.log(error);
            super.responseWithError(response, "000000", "error", error)

        })

    }

}

// ·
module.exports = new BucketCollectionDocumentController
