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
                var scrollableArea = 0,
                    scrollableTabsArea = 0,
                    height = window.innerHeight;
                var header = document.querySelector("header").clientHeight;
                var tabHeader = document.querySelector("#tabs-navigation") ? document.querySelector("#tabs-navigation").clientHeight : '';

                if (header) scrollableArea = `height:${height - header}px;`;

                if (tabHeader) {
                    scrollableTabsArea = `height:${height - (header + tabHeader)}px;`;
                    scrollableArea += "overflow:hidden;";
                    [].forEach.call(document.querySelectorAll(".swiper-slide"), function (item) {
                        item.setAttribute("style", scrollableTabsArea);
                    });
                }

                document.querySelector("main").setAttribute("style", scrollableArea);
            });
        }
    };
}