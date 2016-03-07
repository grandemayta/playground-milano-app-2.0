/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("playgrounds-list.controller", []).controller("PlaygroundsListController", PlaygroundsListController);
PlaygroundsListController.$inject = ["$rootScope", "playgroundsResponse", "$scope", "$state"];


function PlaygroundsListController($rootScope, playgroundsResponse, $scope, $state) {

    $rootScope.pageTitle = 'Lista dei campi';
    $scope.playgrounds = playgroundsResponse.data;

    $scope.detail = function () {
        $state.go('playground.details', {id: $rootScope.modalData.id});
    };

    $scope.goToPlayground = function (id) {
        $state.go('playground.details', {id: id});
    };

    $scope.goToCheckin = function (id) {
        $state.go('checkin', {id: id});
    };

}