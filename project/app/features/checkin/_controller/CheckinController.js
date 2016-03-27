/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("checkin.controller", []).controller("CheckinController", CheckinController);
CheckinController.$inject = ["$scope", "checkinResponse", "HttpWrapper", "Storage", "Navigation"];


function CheckinController($scope, checkinResponse, HttpWrapper, Storage, Navigation) {

    $scope.idCheckin = Storage.getItem("idCheckin");
    $scope.idUser = Storage.getItem("idUser");
    $scope.idPlayground = Storage.getItem("idPlayground");
    $scope.dateFormat = "dd/MM/yyyy";
    $scope.dateFrom = new Date();
    $scope.minDate = new Date();
    $scope.hours = $scope.dateFrom.getHours();
    $scope.minutes = $scope.dateFrom.getMinutes();
    $scope.playground = checkinResponse.data;

    if ($scope.idCheckin) {
        HttpWrapper("GET", `checkin/${$scope.idCheckin}`).then(function (response) {
            $scope.dateFrom = new Date(response.data.date_time_to_go);
            $scope.hours = $scope.dateFrom.getHours();
            $scope.minutes = $scope.dateFrom.getMinutes();
        });
    }

    $scope.getNumber = function (n) {
        return new Array(n);
    };

    $scope.openDatepicker = function () {
        $scope.opened = true;
    };

    $scope.checkinSelected = function ($event) {
        $event.preventDefault();
        var dateTimeSelected = $scope.dateFrom;
        dateTimeSelected.setHours(parseInt($scope.hours), parseInt($scope.minutes), 0, 0);

        if (angular.isDate(dateTimeSelected)) {
            if ($scope.idCheckin) {
                HttpWrapper("PUT", `checkins/${$scope.idCheckin}`, {date_time_to_go: dateTimeSelected}).then(function (response) {
                    Navigation("playground.details", "idPlayground", $scope.idPlayground);
                });
            }
            else {
                HttpWrapper("POST", "checkins", {
                    id_user: $scope.idUser,
                    id_playground: $scope.idPlayground,
                    date_time_to_go: dateTimeSelected
                }).then(function (response) {
                    if (response['message']) alert(response.message);
                    else Navigation("playground.details", "idPlayground", $scope.idPlayground);
                });
            }
        }
    };

}