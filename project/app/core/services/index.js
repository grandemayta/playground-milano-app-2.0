/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

require('./RestService');
require('./GoogleMapInitService');
require('./OAuthService');
require('./DialogsService');


angular.module("services", [
    "services.dialogs-service",
    "services.google-map-init",
    "services.o-auth-service",
    "services.rest-service"
]);