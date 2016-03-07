/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

import "./RestService";
import "./GoogleMapInitService";
import "./OAuthService";
import "./DialogsService";
import "./LoadDataResolve";


angular.module("services", [
    "services.dialogs-service",
    "services.google-map-init",
    "services.o-auth-service",
    "services.rest-service",
    "services.load-data-resolve"
]);