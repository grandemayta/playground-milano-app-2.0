/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("playground-tabs-checkins.controller", []).controller("PlaygroundTabsCheckinsController", PlaygroundTabsCheckinsController);
PlaygroundTabsCheckinsController.$inject = ["$scope", "playgroundCheckinsResponse", "Navigation", "Storage", "HttpWrapper"];


function PlaygroundTabsCheckinsController($scope, playgroundCheckinsResponse, Navigation, Storage, HttpWrapper) {
    $scope.checkinsGroupByDate = playgroundCheckinsResponse.data;
    $scope.idPlayground = Storage.getItem("idPlayground");

    $scope.checkinToolbarStatus = function ($event, posParent, posChildren) {
        $event.preventDefault();
        $scope.checkinsGroupByDate[posParent][posChildren].toolbarStatus = ~$scope.checkinsGroupByDate[posParent][posChildren].toolbarStatus;
    };

    $scope.removeCheckin = function (posParent, posChildren, idCheckin) {
        HttpWrapper("DELETE", `checkins/${idCheckin}`).then(function () {
            $scope.checkinsGroupByDate[posParent].splice(posChildren, 1);
        });
    };

    $scope.goToCheckin = function () {
        Navigation("checkin", "idPlayground", $scope.idPlayground);
    };

    $scope.editMyCheckin = function (idCheckin) {
        Navigation("checkin", ["idPlayground", "idCheckin"], [$scope.idPlayground, idCheckin]);
    };
}