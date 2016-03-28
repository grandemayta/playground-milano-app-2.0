/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("favourites.controller", []).controller("FavouritesController", FavouritesController);
FavouritesController.$inject = ["$scope", "favouritesResponse", "HttpWrapper", "Navigation", "Storage"];


function FavouritesController($scope, favouritesResponse, HttpWrapper, Navigation, Storage) {

    $scope.favourites = favouritesResponse.data;
    $scope.idUser = Storage.getItem("idUser");

    $scope.goToPlayground = function (idPlayground) {
        Navigation("playground.details", "idPlayground", idPlayground);
    };

    $scope.goToCheckin = function (idPlayground) {
        Navigation("checkin", "idPlayground", idPlayground);
    };

    $scope.removePlayground = function (idPlayground, position) {
        HttpWrapper("DELETE", `favourites/${$scope.idUser}/${idPlayground}`).then(function (response) {
            if (response.message) $scope.favourites.splice(position, 1);
        });
    };

}