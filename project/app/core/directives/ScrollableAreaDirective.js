/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("directives.scrollable-area", []).directive("scrollableArea", ScrollableAreaDirective);
ScrollableAreaDirective.$inject = [];


function ScrollableAreaDirective() {
    return {
        restrict: "A",
        link: function (scope, element) {

            element.ready(function () {
                console.log("Ready");
                var height = window.innerHeight;
                var header = document.querySelector("header").clientHeight;
                var scrollableArea = 0;
                if (header) scrollableArea = height - header;
                document.querySelector("main").setAttribute("style", `height:${scrollableArea}px;`);
            });
        }
    };
}