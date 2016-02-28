/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("directives.spinner", []).directive("spinner", Spinner);
Spinner.$inject = [];


function Spinner() {
    return {
        restrict: "E",
        link: function (scope, element) {

            element.ready(function () {
                var options = {
                    lines: 13,
                    length: 8,
                    width: 3,
                    radius: 12,
                    corners: 1,
                    rotate: 0,
                    direction: 1,
                    color: "#fff",
                    speed: 1,
                    trail: 60,
                    shadow: false,
                    hwaccel: false,
                    className: "spinner",
                    zIndex: 2e9,
                    top: "50%",
                    left: "50%"
                };
                var spinner = new Spinner(options).spin(element[0]);
            });
        }
    };
}