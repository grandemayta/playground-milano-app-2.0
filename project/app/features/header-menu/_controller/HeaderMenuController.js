/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

import menuGuest           from "data/menu-guest.json";
import menuUser            from "data/menu-user.json";

angular.module("header-menu.controller", []).controller("HeaderMenuController", HeaderMenuController);
HeaderMenuController.$inject = ["$rootScope", "$scope", "HttpWrapper", "Navigation"];

function HeaderMenuController($rootScope, $scope, HttpWrapper, Navigation) {

    $rootScope.toggleMenu = false;
    $scope.menuData = $rootScope.IS_AUTH ? menuUser : menuGuest;

    $scope.handleMenuStatus = function () {
        $rootScope.toggleMenu = !$rootScope.toggleMenu;
    };

    $scope.handleNavigation = function (page) {
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