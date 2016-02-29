/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

import "./state-change";
import "./interceptor";
import "./language";


angular.module("configs", [
    "configs.interceptor",
    "configs.state-change",
    "configs.language"
]);