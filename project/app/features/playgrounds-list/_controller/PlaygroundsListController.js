/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("playgrounds-list.controller", []).controller("PlaygroundsListController", PlaygroundsListController);
PlaygroundsListController.$inject = ["playgroundsResponse", "$scope", "Navigation"];


function PlaygroundsListController(playgroundsResponse, $scope, Navigation) {

    $scope.playgrounds = playgroundsResponse.data;

    $scope.goToPlayground = function (id) {
        Navigation("playground.details", "idPlayground", id);
    };
    $scope.goToCheckin = function (id) {
        Navigation("checkin", "idPlayground", id);
    };

}