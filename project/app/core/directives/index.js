/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

import "./BackButtonDirective";
import "./ScrollableAreaDirective";
import "./GoogleMapDirective";
import "./ModalDirective";
import "./SpinnerDirective";
import "./OverlayDirective";
import "./TabsDirective";
import "./NavigationDirective";


angular.module("directives", [
    "directives.back-button",
    "directives.scrollable-area",
    "directives.google-map",
    "directives.modal",
    "directives.spinner",
    "directives.overlay",
    "directives.tabs",
    "directives.navigation"
]);