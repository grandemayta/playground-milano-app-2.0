/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("directives.scrollable-content", []).directive("scrollableContent", ScrollableContentDirective);
ScrollableContentDirective.$inject = [];


function ScrollableContentDirective() {
    return {
        restrict: "A",
        link: function (scope, element) {
            element.ready(function () {
                var scrollableArea = 0,
                    footer = 44,
                    height = window.innerHeight;

                var header = document.querySelector("header").clientHeight;
                var tabHeader = document.querySelector("#tabs-navigation") ? document.querySelector("#tabs-navigation").clientHeight : '';

                if (header) scrollableArea = `height:${height - (header + footer)}px;`;
                if (tabHeader) scrollableArea = `height:${height - (header + tabHeader + footer)}px;`;

                angular.element(element[0]).addClass("scrollable");
                element[0].setAttribute("style", scrollableArea);

            });
        }
    };
}