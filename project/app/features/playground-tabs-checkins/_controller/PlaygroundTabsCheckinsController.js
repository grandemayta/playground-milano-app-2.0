/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("playground-tabs-checkins.controller", []).controller("PlaygroundTabsCheckinsController", PlaygroundTabsCheckinsController);
PlaygroundTabsCheckinsController.$inject = ["$scope", "$state", "RestService"];


function PlaygroundTabsCheckinsController($scope, $state, RestService) {

    var id_playground = $state.params.id;

    RestService.get('checkins/' + id_playground).then(function (response) {
        $scope.checkinsGroupByDate = response.data;
    });

    $scope.checkinToolbarStatus = function ($event, posParent, posChildren) {
        $event.preventDefault();
        $scope.checkinsGroupByDate[posParent][posChildren].toolbarStatus = ~$scope.checkinsGroupByDate[posParent][posChildren].toolbarStatus;
    };

    $scope.removeCheckin = function ($event, posParent, posChildren, idCheckin) {
        $event.preventDefault();
        RestService.remove('checkins/' + idCheckin).then(function (response) {
            $scope.checkinsGroupByDate[posParent].splice(posChildren, 1);
        });
    };

    $scope.goToCheckin = function () {
        $state.go('checkin', {id: id_playground});
    };

    $scope.editMyCheckin = function (idCheckin) {
        $state.go('checkin', {id: id_playground, idCheckin: idCheckin});
    };

}