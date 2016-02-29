/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("header-menu.controller", []).controller("HeaderMenuController", HeaderMenuController);
HeaderMenuController.$inject = ["$rootScope", "$scope", "$state", "localStorageService", "RestService"];


function HeaderMenuController($rootScope, $scope, $state, localStorageService, RestService) {

    $rootScope.toggleMenu = false;

    $scope.openMenu = function () {
        $rootScope.toggleMenu = true;
    };

    $scope.closeMenu = function () {
        $rootScope.toggleMenu = $rootScope.toggleSpinner = $rootScope.toggleModal = false;
    };

    $scope.menuChangePage = function ($event, page) {
        $event.preventDefault();
        if ($rootScope.currentPage === page) $scope.closeMenu();
        else $state.go(page);
    };

    $scope.logout = function () {
        RestService.get('logout/' + $rootScope.userData.id).then(function (data) {
            localStorageService.remove('user');
            $state.go('social');
        });
    };

}