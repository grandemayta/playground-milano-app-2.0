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
        replace: true,
        template: '\
        <div class="spinner">\
            <div class="double-bounce1"></div>\
            <div class="double-bounce2"></div>\
        </div>'
    };
}