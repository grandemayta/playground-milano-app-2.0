/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

import "./BackButtonDirective";
import "./DefineAreaDirective";
import "./ModalDirective";
import "./GoogleMapDirective";
import "./TabsDirective";
import "./SpinnerDirective";
import "./LoadTemplatesDirectives";


angular.module("directives", [
    "directives.back-button",
    "directives.define-area",
    "directives.google-map",
    "directives.load-template",
    "directives.modal",
    "directives.spinner",
    "directives.tabs"
]);