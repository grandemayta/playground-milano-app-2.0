/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

import menuData           from "../data/menu.json";

angular.module("header-menu.controller", []).controller("HeaderMenuController", HeaderMenuController);
HeaderMenuController.$inject = ["$rootScope", "$scope", "HttpWrapper", "Navigation"];

function HeaderMenuController($rootScope, $scope, HttpWrapper, Navigation) {

    $rootScope.toggleMenu = false;
    $scope.menuData = menuData;

    $scope.handleMenuStatus = function () {
        $rootScope.toggleMenu = !$rootScope.toggleMenu;
    };

    $scope.handleNavigation = function ($event, page) {
        $event.preventDefault();
        $rootScope.toggleMenu = false;
        if (page === "logout") $scope.logout();
        else Navigation(page);
    };

    $scope.logout = function () {
        HttpWrapper("GET", "logout:idUser").then(function (response) {
            Navigation("social", ["idUser", "sessionData"]);
        });
    };

}