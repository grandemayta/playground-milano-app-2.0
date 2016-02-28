/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

require("./BackButtonDirective");
require("./DefineAreaDirective");
require("./ModalDirective");
require("./GoogleMapDirective");
require("./TabsDirective");
require("./SpinnerDirective");
require("./LoadTemplatesDirectives");


angular.module("directives", [
    "directives.back-button",
    "directives.define-area",
    "directives.google-map",
    "directives.load-template",
    "directives.modal",
    "directives.spinner",
    "directives.tabs"
]);