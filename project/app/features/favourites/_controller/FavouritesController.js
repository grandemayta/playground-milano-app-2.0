/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("favourites.controller", []).controller("FavouritesController", FavouritesController);
FavouritesController.$inject = ["$scope", "favouritesResponse", "HttpWrapper", "Navigation"];


function FavouritesController($scope, favouritesResponse, HttpWrapper, Navigation) {

    $scope.favourites = favouritesResponse.data;

    $scope.goToPlayground = function (idPlayground) {
        Navigation("playground.details", "idPlayground", idPlayground);
    };

    $scope.goToCheckin = function (idPlayground) {
        Navigation("checkin", "idPlayground", idPlayground);
    };

    $scope.removePlayground = function (idPlayground, position) {
        HttpWrapper("DELETE", `favourites:idUser/${idPlayground}`).then(function (response) {
            if (response.message) $scope.favourites.splice(position, 1);
        });
    };

}