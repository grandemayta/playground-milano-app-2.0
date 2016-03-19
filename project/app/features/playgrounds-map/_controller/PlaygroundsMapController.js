/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("playgrounds-map.controller", []).controller("PlaygroundsMapController", PlaygroundsMapController);
PlaygroundsMapController.$inject = ["$rootScope", "playgroundsResponse", "$scope", "Navigation", "$state"];


function PlaygroundsMapController($rootScope, playgroundsResponse, $scope, Navigation, $state) {

    $scope.playgrounds = playgroundsResponse.data;

    $scope.$watch('placeSelected', function (placeSelected) {
        if (!_.isEmpty(placeSelected)) {
            $rootScope.toggleModal = true;
            $scope.playgroundId = placeSelected.id;
            $scope.playgroundName = placeSelected.title;
        }
    });

    $scope.handleNavigationMap = function () {
        Navigation("playground.details", "idPlayground", $scope.playgroundId);
    };

}