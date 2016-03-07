/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

import menuData           from "../data/menu.json";

angular.module("header-menu.controller", []).controller("HeaderMenuController", HeaderMenuController);
HeaderMenuController.$inject = ["$rootScope", "$scope", "$state", "localStorageService", "RestService"];

function HeaderMenuController($rootScope, $scope, $state, localStorageService, RestService) {

    $rootScope.toggleMenu = false;
    $scope.menuData = menuData;

    $scope.handleMenuStatus = function () {
        $rootScope.toggleMenu = !$rootScope.toggleMenu;
    };

    $scope.handleNavigation = function ($event, page) {
        $event.preventDefault();
        $rootScope.toggleMenu = false;
        $state.go(page);
    };

    $scope.logout = function () {
        RestService.get('logout/' + $rootScope.userData.id).then(function (data) {
            localStorageService.remove('user');
            $state.go('social');
        });
    };

}