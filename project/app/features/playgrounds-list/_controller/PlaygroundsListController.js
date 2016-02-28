/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("playgrounds-list.controller", []).controller("PlaygroundsListController", PlaygroundsListController);
PlaygroundsListController.$inject = ["$rootScope", "$scope", "$state", "RestService"];


function PlaygroundsListController($rootScope, $scope, $state, RestService) {

    $rootScope.pageTitle = 'Lista dei campi';

    RestService.get('playgrounds').then(function (response) {
        $scope.playgrounds = response.data;
    });

    $scope.detail = function () {
        $state.go('playground', {id: $rootScope.modalData.id});
    };

    $scope.goToPlayground = function (id) {
        $state.go('playground', {id: id});
    };

    $scope.goToCheckin = function (id) {
        $state.go('checkin', {id: id});
    };

}