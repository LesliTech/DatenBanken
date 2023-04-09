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
const databaseController = require("./../../controllers/v2.0/bucket/database")
// const collectionController = require("./../controllers/bucket/collection")
// const documentController = require("../controllers/bucket/document")


// · Routes builder
let api = express.Router()


// · Database endpoints
api.get("/", databaseController.get_database)
//api.delete("/", databaseController.delete_database)


// · Collection endpoints
// api.get("/:bucket", collectionController.get_collection)        // Return information of a collection
// api.post("/:bucket", collectionController.post_collection)      // Create a collection
// api.put("/:bucket", collectionController.put_collection)        // Rename a collection
// api.delete("/:bucket", collectionController.delete_collection)  // Delete a collection


// Document endpoints
// api.post("/:bucket/documents", documentController.post_document)        // Create document
// api.get("/:bucket/documents/first", documentController.get_document)    // Get the first document found
// api.get("/:bucket/documents", documentController.get_documents)         // Get all documents
// api.put("/:bucket/documents/:document_id", documentController.put_document)         // Update a specific document
// api.delete("/:bucket/documents/:document_id", documentController.delete_document)   // Delete a document


// works with bucket data (documents)
// api.get ("/:bucket/documents/:document_id", bucketController.getBucketDocument)
// api.put ("/:bucket/documents/:document_id", bucketController.putBucketDocument)
// api.get("/:bucket/documents/sum", bucketController.get)
// api.get("/:bucket/documents/count", bucketController.get)
// api.get("/:bucket/documents/:document", bucketController.get)


// · 
module.exports = api
