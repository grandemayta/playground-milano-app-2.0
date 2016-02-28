/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

require('./state-change');
require('./interceptor');
require('./language');


angular.module("configs", [
    "configs.interceptor",
    "configs.state-change",
    "configs.language"
]);