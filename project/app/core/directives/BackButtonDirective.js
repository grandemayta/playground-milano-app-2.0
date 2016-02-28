/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("directives.back-button", []).directive("backButton", BackButton);
BackButton.$inject = ["$window"];


function BackButton($window) {
    return {
        restrict: 'AE',
        link: function (scope, element) {
            element.bind('click', function () {
                $window.history.back();
            });
        }
    };
}