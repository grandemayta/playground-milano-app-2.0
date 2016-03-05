/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("generate-code.controller", []).controller("GenerateCodeController", GenerateCodeController);
GenerateCodeController.$inject = ["$scope", "$state", "RestService"];


function GenerateCodeController($scope, $state, RestService) {

    $scope.formGenerateCode = function ($event) {
        $event.preventDefault();

        RestService.post('generatecode', $scope.generatecodeData).then(function (response) {
            console.log(response);
            $state.go('resetpassword', {email: $scope.generatecodeData.email});
        });

    };

}