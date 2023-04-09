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
class DatenBankenController {

    respondWithSuccessful(response, payload = {}) {

        response.type("application/json") 

        return response.status(200).send(payload)
        
    }


    respondWithError(response, code, message = false, details = false) {
        /*
        * 01    -> Component (controller, middleware, router, system)
        * 01    -> File number
        * 01    -> Method number
        * 00    -> Correlative
        */
        let error_codes = {

            '00000000': 'Internal app error',

            // controller errors - auth
            '01020101': 'Not valid parameters found'

        }

        // default response message
        let error = {
            code: code,
            details: details,
            message: message || error_codes[code]
        }

        //
        response.status(200).send({
            successful: false,
            error
        })

    }

}


// · 
module.exports = DatenBankenController
