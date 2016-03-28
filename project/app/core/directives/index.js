/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

import "./BackButtonDirective";
import "./ScrollablePageDirective";
import "./GoogleMapDirective";
import "./ModalDirective";
import "./SpinnerDirective";
import "./OverlayDirective";
import "./TabsDirective";
import "./NavigationDirective";
import "./ScrollableContentDirective";


angular.module("directives", [
    "directives.back-button",
    "directives.scrollable-page",
    "directives.google-map",
    "directives.modal",
    "directives.spinner",
    "directives.overlay",
    "directives.tabs",
    "directives.navigation",
    "directives.scrollable-content"
]);