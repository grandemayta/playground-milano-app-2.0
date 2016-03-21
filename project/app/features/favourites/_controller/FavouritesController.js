/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("favourites.controller", []).controller("FavouritesController", FavouritesController);
FavouritesController.$inject = ["$scope", "favouritesResponse", "$state", "RestService"];


function FavouritesController($scope, favouritesResponse, $state, RestService) {

    $scope.favourites = favouritesResponse.data;

    $scope.goToPlayground = function (idPlayground) {
        $state.go('playground', {id: idPlayground});
    };

    $scope.goToCheckin = function (id) {
        $state.go('checkin', {id: id});
    };

    $scope.removePlayground = function (idUser, idPlayground, position) {
        RestService.remove('favourites/' + idUser + '/' + idPlayground).then(function (response) {
            if (response.message) $scope.favourites.splice(position, 1);
        });
    };

}