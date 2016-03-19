/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("configs.state-change", []).run(StateChangeConfig);
StateChangeConfig.$inject = ["$rootScope", "Storage", "COMPONENTS_VALUES", "$timeout"];


function StateChangeConfig($rootScope, Storage, COMPONENTS_VALUES, $timeout) {

    $rootScope.$on("$stateChangeStart", function (event, toState) {

        $rootScope.userData = Storage.getItem("sessionData");
        $rootScope.IS_AUTH = $rootScope.userData || false;
        $rootScope.env = "PROD";
        $rootScope.currentPage = toState.name;
        $rootScope.toggleBackButton = toState.backbutton ? true : false;
        $rootScope.language = "it";
        $rootScope.DEVICE = COMPONENTS_VALUES;
        $rootScope.toggleModal = false;
        $rootScope.toggleSpinner = false;
        $rootScope.toggleMenu = false;

    });

    $rootScope.$on("$stateChangeSuccess", function (event, toState) {
        $timeout(function () {
            $rootScope.pageTitle = toState.title;
        }, 200);
    });

}