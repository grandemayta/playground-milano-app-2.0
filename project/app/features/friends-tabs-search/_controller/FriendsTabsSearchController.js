/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("friends-tabs-search.controller", []).controller("FriendsTabsSearchController", FriendsTabsSearchController);
FriendsTabsSearchController.$inject = ["$rootScope", "$scope", "RestService"];


function FriendsTabsSearchController($rootScope, $scope, RestService) {

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


}