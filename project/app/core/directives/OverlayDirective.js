/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("directives.overlay", []).directive("overlay", Overlay);
Overlay.$inject = [];


function Overlay() {
    return {
        restrict: "E",
        replace: true,
        scope: {
            overlayStatus: "="
        },
        template: '<div class="overlay" ng-class="{\'active\' : overlayStatus}"></div>'
    };
}