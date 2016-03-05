/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("login.controller", []).controller("LoginController", LoginController);
LoginController.$inject = ["$scope", "$state", "RestService", "localStorageService"];


function LoginController($scope, $state, RestService, localStorageService) {

    $scope.formLogin = function () {
        RestService.post('login', $scope.user).then(function (response) {
            localStorageService.set('user', JSON.stringify(response.data));
            $state.go('playgrounds.map');
        });
    };

}