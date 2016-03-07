/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("directives.overlay", []).directive("overlay", OverlayDirective);
OverlayDirective.$inject = [];


function OverlayDirective() {
    return {
        restrict: "E",
        replace: true,
        scope: {
            overlayStatus: "="
        },
        template: '<div class="overlay"></div>'
    };
}