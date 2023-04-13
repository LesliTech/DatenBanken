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
const { app, expect, config, request, result, faker, expectResponseWithSuccessful } = require("../../helper");


// Tests for buckets
describe("GET:/v2/buckets", function () {

    let result = {
        response: undefined
    }

    beforeEach(async () => {
        result.response = await request(app).get("/v2/buckets")
    })

    expectResponseWithSuccessful(result)

    it("is expected to respond with information object", function () {

        expect(result.response.body).to.be.an("array")

    })

})


describe("POST:/v2/buckets", function () {

    let result = {
        bucketId: undefined,
        response: undefined
    }

    beforeEach(async () => {
        result.bucketId = faker.datatype.uuid()
        result.response = await request(app).post("/v2/buckets/" + result.bucketId)
    })

    expectResponseWithSuccessful(result)

    it("is expected to respond with information object", function () {

        expect(result.response.body.bucket).to.eql(result.bucketId)

    })

})

// Tests for databases
describe("GET:/v2/buckets/:id", function () {

    let result = {
        response: undefined
    }

    beforeEach(async () => {
        let bucketId = faker.datatype.uuid()
        await request(app).post("/v2.0/buckets/" + bucketId)
        result.response = await request(app).get("/v2/buckets/" + bucketId)
    })

    expectResponseWithSuccessful(result)

    it("is expected to respond with information object", function () {

        expect(result.response.body).to.have.property("ok")
        expect(result.response.body.ok).to.be.a("number")
        expect(result.response.body.ok).to.equal(1)


        expect(result.response.body).to.have.property("database_collection_document_count")
        expect(result.response.body.database_collection_document_count).to.be.a("number")


        expect(result.response.body).to.have.property("database_collection_uncompressed_data_size")
        expect(result.response.body.database_collection_uncompressed_data_size).to.be.an("object")

        expect(result.response.body.database_collection_uncompressed_data_size).to.have.property("bytes")
        expect(result.response.body.database_collection_uncompressed_data_size.bytes).to.be.an("number")


        expect(result.response.body).to.have.property("document_average_size")
        expect(result.response.body.document_average_size).to.be.an("object")

        expect(result.response.body.document_average_size).to.have.property("bytes")
        expect(result.response.body.document_average_size.bytes).to.be.an("number")

    })

})



describe("DELETE:/v2/buckets", function () {

    let result = {
        bucketId: undefined,
        response: undefined
    }

    beforeEach(async () => {
        result.bucketId = faker.datatype.uuid()
        await request(app).post("/v2/buckets/" + result.bucketId)
        result.response = await request(app).delete("/v2/buckets/" + result.bucketId)
    })

    expectResponseWithSuccessful(result)

    it("is expected to respond with information object", function () {

        expect(result.response.body).to.eql(true)

    })

})
