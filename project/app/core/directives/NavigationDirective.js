/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("directives.navigation", []).directive("pmNavigation", NavigationDirective);
NavigationDirective.$inject = ["Navigation"];


function NavigationDirective(Navigation) {
    return {
        restrict: "A",
        scope: {
            key: "@attrKey",
            value: "@attrValue"
        },
        link: function (scope, elem, attrs) {
            elem.bind("click", function (e) {
                e.preventDefault();
                Navigation(attrs.pmNavigation, scope.key, scope.value);
            });
        }
    };
}