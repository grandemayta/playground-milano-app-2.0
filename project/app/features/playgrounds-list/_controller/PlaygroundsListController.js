/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("playgrounds-list.controller", []).controller("PlaygroundsListController", PlaygroundsListController);
PlaygroundsListController.$inject = ["playgroundsResponse", "$scope", "$state"];


function PlaygroundsListController(playgroundsResponse, $scope, $state) {

    $scope.playgrounds = playgroundsResponse.data;

    $scope.goToPlayground = function (id) {
        $state.go('playground.details', {id: id});
    };

    $scope.goToCheckin = function (id) {
        $state.go('checkin', {id: id});
    };

}