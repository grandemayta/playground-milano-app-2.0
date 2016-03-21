/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("friends-tabs-list.controller", []).controller("FriendsTabsListController", FriendsTabsListController);
FriendsTabsListController.$inject = ["$rootScope", "$scope", "FriendslistResponse", "RestService"];


function FriendsTabsListController($rootScope, $scope, FriendslistResponse, RestService) {

    $scope.myfriends = FriendslistResponse.data;

    $scope.removeUser = function (idUser, idFriend) {
        RestService.remove('friends/' + idUser + '/' + idFriend).then(function (response) {
            $scope.myfriends = response.data;
            $rootScope.toggleModal = true;
            $rootScope.modalData = {
                text: 'Amico rimosso',
                closebutton: true
            };
        });
    };


}