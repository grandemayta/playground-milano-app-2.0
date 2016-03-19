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
import "./HttpWrapperService";
import "./StorageService";
import "./MakeUrlService";
import "./NavigationService";


angular.module("services", [
    "services.dialogs-service",
    "services.google-map-init",
    "services.o-auth-service",
    "services.rest-service",
    "services.http-wrapper-service",
    "services.storage-service",
    "services.make-url-service",
    "services.navigation-service"
]);