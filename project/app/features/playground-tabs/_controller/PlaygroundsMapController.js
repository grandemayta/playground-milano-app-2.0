/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("playgrounds-map.controller", []).controller("PlaygroundsMapController", PlaygroundsMapController);
PlaygroundsMapController.$inject = ["$rootScope", "$scope", "$timeout", "RestService"];


function PlaygroundsMapController($rootScope, $scope, $timeout, RestService) {

    $rootScope.pageTitle = 'Mappa dei campi';

    RestService.get('playgrounds').then(function (response) {
        $timeout(function () {
            $scope.playgrounds = response.data;
        }, 200);
    });

}