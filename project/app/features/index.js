/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

import "./header-without-menu";
import "./header-menu";
import "./splashscreen";
import "./access-social";
import "./login";
import "./registration";
import "./generate-code";
import "./reset-password";
import "./playgrounds-list";
import "./playgrounds-map";
import "./playground-tabs";
import "./playground-tabs-details";
import "./playground-tabs-checkins";
import "./playground-comments";


angular.module("features", [
    "header-without-menu",
    "header-menu",
    "splashscreen",
    "access-social",
    "login",
    "registration",
    "generate-code",
    "reset-password",
    "playgrounds-list",
    "playgrounds-map",
    "playground-tabs",
    "playground-tabs-details",
    "playground-tabs-checkins",
    "playground-comments"
]);