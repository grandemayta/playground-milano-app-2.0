/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("friends-tabs-list.controller", []).controller("FriendsTabsListController", FriendsTabsListController);
FriendsTabsListController.$inject = ["$rootScope", "$scope", "listResponse", "RestService"];


function FriendsTabsListController($rootScope, $scope, listResponse, RestService) {

    $scope.myfriends = listResponse.data;

    $scope.searchFriends = function (idUser, value) {
        if (value.length >= 3) {
            RestService.get('search-users/' + idUser + '/' + value).then(function (response) {
                $scope.newFriends = response.data;
            });
        }
        else delete $scope.newFriends;
    };

    $scope.addFriend = function (idUser, friend, iconId) {
        RestService.post('friends', {id_user: idUser, id_friend: friend.id}).then(function (response) {
            document.querySelector('#' + iconId).innerHTML = '<i class="icon-check-mark-3"></i>';
            $scope.myfriends = response.data;
            $rootScope.toggleModal = true;
            $rootScope.modalData = {
                text: 'Amico aggiunto',
                closebutton: true
            };
        });
    };

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