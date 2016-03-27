/**
 *
 * Created by Gabriel Mayta
 *
 */

"use strict";

angular.module("playground-tabs-comments.controller", []).controller("PlaygroundTabsCommentsController", PlaygroundTabsCommentsController);
PlaygroundTabsCommentsController.$inject = ["$rootScope", "$scope", "playgroundCommentsResponse", "HttpWrapper", "Storage"];


function PlaygroundTabsCommentsController($rootScope, $scope, playgroundCommentsResponse, HttpWrapper, Storage) {
    $scope.userComment = '';
    $scope.userHasComment = false;
    $scope.idUser = Storage.getItem("idUser");
    $scope.idPlayground = Storage.getItem("idPlayground");
    $scope.playgroundComments = playgroundCommentsResponse.data;

    if ($rootScope.IS_AUTH) {
        HttpWrapper("GET", "comments:idUser:idPlayground").then(function (response) {
            $scope.userHasComment = !response.hasOwnProperty("message") || false;
        });
    }

    $scope.toggleCommentPanel = function () {
        $scope.toggleCommentPanelStatus = ~$scope.toggleCommentPanelStatus;
    };

    $scope.commentToolbar = function (pos) {
        $scope.playgroundComments[pos].toolbarStatus = ~$scope.playgroundComments[pos].toolbarStatus;
    };

    $scope.editMyComment = function (id, actualComment, pos) {
        $scope.toggleCommentPanel();
        $scope.idComment = id;
        $scope.commentPosition = pos;
        $scope.userComment = actualComment;
    };

    $scope.removeMyComment = function (pos, idComment) {
        HttpWrapper("DELETE", `comments/${idComment}`).then(function () {
            $scope.playgroundComments.splice(pos, 1);
            $scope.userHasComment = false;
        });
    };

    $scope.saveUserComment = function (value) {
        var commentClean = String(value).replace(/<[^>]+>/gm, '');
        var requestData = {id_user: $scope.idUser, id_playground: $scope.idPlayground, comment: commentClean};
        HttpWrapper("POST", "comments", requestData).then(function () {
            $scope.toggleCommentPanel();
            $scope.userHasComment = true;
        });
    };

    $scope.updateUserComment = function (userCommentUpdated) {
        var commentClean = String(userCommentUpdated).replace(/<[^>]+>/gm, '');
        var requestData = {id_comment: $scope.idComment, comment: commentClean};
        HttpWrapper("PUT", "comments", requestData).then(function () {
            $scope.playgroundComments[$scope.commentPosition].comment = commentClean;
            $scope.toggleCommentPanel();
        });
    };
}