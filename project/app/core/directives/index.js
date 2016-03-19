/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

import "./BackButtonDirective";
import "./DefineAreaDirective";
import "./GoogleMapDirective";
import "./ModalDirective";
import "./SpinnerDirective";
import "./OverlayDirective";
import "./TabsDirective";
import "./NavigationDirective";


angular.module("directives", [
    "directives.back-button",
    "directives.define-area",
    "directives.google-map",
    "directives.modal",
    "directives.spinner",
    "directives.overlay",
    "directives.tabs",
    "directives.navigation"
]);