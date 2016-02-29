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
import "./playgrounds-list";


angular.module("features", [
    "header-without-menu",
    "header-menu",
    "splashscreen",
    "access-social",
    "playgrounds-list"
]);