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


// · 
const { app, expect, config, request, expectResponseWithSuccessful } = require("../../../helper");


// Tests for databases
describe("GET:/api/v2.0/bucket", function () {

    let result = {
        response: undefined
    }

    beforeEach(async () => {
        result.response = await request(app).get("/api/v2.0/buckets")
    })

    expectResponseWithSuccessful(result)

    it("is expected to respond with information object", function () {

        expect(result.response.body).to.have.property("information")
        expect(result.response.body.information).to.be.an("object")

        expect(result.response.body.information).to.have.property("database_collection_count")
        expect(result.response.body.information.database_collection_count).to.be.a("number")

        expect(result.response.body.information).to.have.property("database_collection_document_count")
        expect(result.response.body.information.database_collection_document_count).to.be.a("number")

    })

    it("is expected to respond with information.database_uncompressed_data_size object", function () {

        expect(result.response.body.information).to.have.property("database_uncompressed_data_size")
        expect(result.response.body.information.database_uncompressed_data_size).to.be.an("object")

        expect(result.response.body.information.database_uncompressed_data_size).to.have.property("bytes")
        expect(result.response.body.information.database_uncompressed_data_size.bytes).to.be.a("number")

        expect(result.response.body.information.database_uncompressed_data_size).to.have.property("string")
        expect(result.response.body.information.database_uncompressed_data_size.string).to.be.a("string")

    })

    it("is expected to respond with information.database_storage_size object", function () {

        expect(result.response.body.information).to.have.property("database_storage_size")
        expect(result.response.body.information.database_storage_size).to.be.an("object")

        expect(result.response.body.information.database_storage_size).to.have.property("bytes")
        expect(result.response.body.information.database_storage_size.bytes).to.be.a("number")

        expect(result.response.body.information.database_storage_size).to.have.property("string")
        expect(result.response.body.information.database_storage_size.string).to.be.a("string")

    })

    it("is expected to respond with information.document_average_size object", function () {

        expect(result.response.body.information).to.have.property("document_average_size")
        expect(result.response.body.information.document_average_size).to.be.an("object")

        expect(result.response.body.information.document_average_size).to.have.property("bytes")
        expect(result.response.body.information.document_average_size.bytes).to.be.a("number")

        expect(result.response.body.information.document_average_size).to.have.property("string")
        expect(result.response.body.information.document_average_size.string).to.be.a("string")

    })

    it("is expected to respond with information.indexes_size object", function () {

        expect(result.response.body.information).to.have.property("indexes_size")
        expect(result.response.body.information.indexes_size).to.be.an("object")

        expect(result.response.body.information.indexes_size).to.have.property("bytes")
        expect(result.response.body.information.indexes_size.bytes).to.be.a("number")

        expect(result.response.body.information.indexes_size).to.have.property("string")
        expect(result.response.body.information.indexes_size.string).to.be.a("string")

    })

    it("is expected to respond with information.filesystem_available_space object", function () {

        expect(result.response.body.information).to.have.property("filesystem_available_space")
        expect(result.response.body.information.filesystem_available_space).to.be.an("object")

        expect(result.response.body.information.filesystem_available_space).to.have.property("bytes")
        expect(result.response.body.information.filesystem_available_space.bytes).to.be.a("number")

        expect(result.response.body.information.filesystem_available_space).to.have.property("string")
        expect(result.response.body.information.filesystem_available_space.string).to.be.a("string")

    })

    it("is expected to respond with buckets object", function () {

        expect(result.response.body).to.have.property("buckets")
        expect(result.response.body.buckets).to.be.an("array")

    })

})
