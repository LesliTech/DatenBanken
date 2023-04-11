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
const { app, expect, config, request, result, faker, expectResponseWithSuccessful } = require("../../../helper");


// Tests for buckets
describe("GET:/api/v2.0/buckets/:bucket/documents", function () {

    let result = {
        response: undefined
    }

    beforeEach(async () => {
        let user = { name: faker.name.fullName(), job: faker.name.jobTitle() }
        await request(app).post("/api/v2.0/buckets/my-users/documents").send(user)
        result.response = await request(app).get("/api/v2.0/buckets/my-users/documents")
    })

    expectResponseWithSuccessful(result)

    it("is expected to respond with information object", function () {

        expect(result.response.body).to.have.property("records")
        expect(result.response.body.records).to.be.an("object")

        expect(result.response.body.records).to.have.property("total")
        expect(result.response.body.records.total).to.be.gt(0)

        expect(result.response.body.records).to.have.property("found")
        expect(result.response.body.records.found).to.be.gt(0)



        expect(result.response.body).to.have.property("documents")
        expect(result.response.body.documents).to.be.an("array")

        expect(result.response.body.documents[0]).to.have.property("_id")
        expect(result.response.body.documents[0]._id).to.be.a("string")

        expect(result.response.body.documents[0]).to.have.property("datetime")
        expect(result.response.body.documents[0].datetime).to.be.a("string")



        expect(result.response.body.documents[0]).to.have.property("name")
        expect(result.response.body.documents[0].name).to.be.a("string")

        expect(result.response.body.documents[0]).to.have.property("job")
        expect(result.response.body.documents[0].job).to.be.a("string")

    })

})
