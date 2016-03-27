/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("playground-tabs-details.controller", []).controller("PlaygroundTabsDetailsController", PlaygroundTabsDetailsController);
PlaygroundTabsDetailsController.$inject = ["$rootScope", "$scope", "playgroundDetailsResponse", "HttpWrapper", "Storage"];


function PlaygroundTabsDetailsController($rootScope, $scope, playgroundDetailsResponse, HttpWrapper, Storage) {
    $scope.favourites = false;
    $scope.playground = playgroundDetailsResponse.data;
    $scope.idUser = Storage.getItem("idUser");
    $scope.idPlayground = Storage.getItem("idPlayground");

    if ($rootScope.IS_AUTH) {
        HttpWrapper("GET", "favourites:idUser:idPlayground").then(function (response) {
            if (response['data']) $scope.favourites = true;
        });
    }

    $scope.toggleFavourites = function () {
        var requestData = {id_user: $scope.idUser, id_playground: $scope.idPlayground};
        if (!$scope.favourites) {
            HttpWrapper("POST", "favourites", requestData).then(function (response) {
                if (response.data) $scope.favourites = true;
            });
        }
        else {
            HttpWrapper("DELETE", "favourites:idUser:idPlayground").then(function (response) {
                if (response.message) $scope.favourites = false;
            });
        }
    };
}