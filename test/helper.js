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


// · Import frameworks, libraries, tools and apps
const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
const debug = require("lesli-js").debug.nodejs


// · Set environment mode
process.env.NODE_ENV = "test"


// · Import & build configuration
const config = require("lesli-nodejs-configuration")


// · assign http plugin to chain framework
chai.use(chaiHttp);


// · Import app
var app = require("../app")


// · 
exports.app = app
exports.expect = expect
exports.config = config
exports.request = chai.request

exports.expectResponseWithSuccessful = (result) => {

    it("is expected to respond with a success status code (2xx)", function() {
        expect(result.response).to.have.status(200)
    })

    it("is expected to respond with application/json", function () {
        expect(result.response).to.have.header("content-type", "application/json; charset=utf-8")
    })

}    
