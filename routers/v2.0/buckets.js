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
const express = require("express")


// Import MongoDB queries
const bucketsController = require("../../controllers/v2.0/buckets")
const bucketDocumentsController = require("../../controllers/v2.0/buckets/documents")


// · Routes builder
let api = express.Router()


// · Database information
api.get("/", bucketsController.getBuckets)


// · information about a bucket inside the buckets database 
api.get("/:bucket", bucketsController.getBucket)        // Return information of a collection
api.post("/:bucket", bucketsController.postBucket)      // Create a collection
api.delete("/:bucket", bucketsController.deleteBucket)  // Create a collection


// Work with documents from a bucket
api.get("/:bucket/documents", bucketDocumentsController.getDocuments)            // Get all documents of a bucket
api.post("/:bucket/documents", bucketDocumentsController.postDocument)           // Create document
api.get("/:bucket/documents/last", bucketDocumentsController.getDocumentLast)    // Get the last document found
api.get("/:bucket/documents/first", bucketDocumentsController.getDocumentFirst)  // Get the first document found


// · 
module.exports = api
