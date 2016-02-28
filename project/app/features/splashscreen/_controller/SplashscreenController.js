/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("splashscreen.controller", []).controller("SplashscreenController", SplashscreenController);
SplashscreenController.$inject = ["$rootScope", "$scope", "$state", "$interval"];


function SplashscreenController($rootScope, $scope, $state, $interval) {

    $scope.count = 0;

    var interval = $interval(function () {
        ++$scope.count;
        document.querySelector('.loading-bar').style.width = $scope.count + '%';
    }, 50);

    $scope.$watch('count', function (newVal) {
        if (newVal != undefined && parseInt(newVal) === 100) {
            $interval.cancel(interval);
            $state.go("social");
        }
    });

}