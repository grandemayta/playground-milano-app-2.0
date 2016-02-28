/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

require("./constants");
require("./configs");
require("./services");
require("./directives");


angular.module("app.core", [
    "constants",
    "configs",
    "services",
    "directives"
]);