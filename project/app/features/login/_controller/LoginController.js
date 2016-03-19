/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("login.controller", []).controller("LoginController", LoginController);
LoginController.$inject = ["$scope", "HttpWrapper", "Navigation"];


function LoginController($scope, HttpWrapper, Navigation) {

    $scope.formLogin = function () {
        HttpWrapper("POST", "login", $scope.user).then(function (response) {
            Navigation("playgroundsmap", ["sessionData", "idUser"], [response.data, response.data.id]);
        });
    };

}