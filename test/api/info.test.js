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
const { app, expect, config, request, response, expectResponseWithSuccessful } = require("../helper");


// Tests for databases
describe("GET:/api", function () {

    let result = {
        response: undefined
    }

    beforeEach(async () => {
        result.response = await request(app).get("/api")
    })

    expectResponseWithSuccessful(result)

    it("is expected to respond with status", function () {
        expect(result.response.body).to.have.property("status")
        expect(result.response.body.status).to.equal("ok")
    })

    it("is expected to respond with name", function () {
        expect(result.response.body).to.have.property("name")
        expect(result.response.body.name).to.equal("datenbanken")
    })

    it("is expected to respond with version", function () {
        expect(result.response.body).to.have.property("version")
        expect(result.response.body.version).to.equal("2.0.0")
    })

    it("is expected to respond with description", function () {
        expect(result.response.body).to.have.property("description")
        expect(result.response.body.description).to.equal("API-First Database as a Service")
    })

    it("is expected to respond with homepage", function () {
        expect(result.response.body).to.have.property("homepage")
        expect(result.response.body.homepage).to.equal("https://datenbanken.dev/")
    })

    it("is expected to respond with license", function () {
        expect(result.response.body).to.have.property("license")
        expect(result.response.body.license).to.equal("GPL-3.0")
    })

})
