/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("playground-tabs-details.controller", []).controller("PlaygroundTabsDetailsController", PlaygroundTabsDetailsController);
PlaygroundTabsDetailsController.$inject = ["$rootScope", "$scope", "playgroundDetailsResponse", "$state", "RestService"];


function PlaygroundTabsDetailsController($rootScope, $scope, playgroundDetailsResponse, $state, RestService) {

    $scope.favourites = false;
    var id_playground = $state.params.id;

    $scope.playground = playgroundDetailsResponse.data;

    /*if ($rootScope.IS_AUTH) {
        RestService.get('favourites/' + $rootScope.userData.id + '/' + id_playground).then(function (response) {
            if (response['data']) $scope.favourites = true;
        });
    }*/

    $scope.toggleFavourites = function () {
        if (!$scope.favourites) {
            RestService.post('favourites', {id_user: $rootScope.userData.id, id_playground: id_playground}).then(function (response) {
                if (response.data) $scope.favourites = true;
            });
        }
        else {
            RestService.remove('favourites/' + $rootScope.userData.id + '/' + id_playground).then(function (response) {
                if (response.message) $scope.favourites = false;
            });
        }
    };


}