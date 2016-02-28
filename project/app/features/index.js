/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

require("./menu");
require("./splashscreen");
require("./access-social");
require("./playgrounds-list");

angular.module("features", [
    "menu",
    "splashscreen",
    "access-social",
    "playgrounds-list"
]);