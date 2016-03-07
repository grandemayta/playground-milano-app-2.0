/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("directives.modal", []).directive("modal", ModalDirective);
ModalDirective.$inject = ['$rootScope'];


function ModalDirective($rootScope) {
    return {
        restrict: 'E',
        transclude: true,
        template: '\
        <i ng-click="closeModal()" class="close-icon icon-close-empty"></i>\
        <div class="modal-body" ng-transclude></div>',
        link: function (scope) {

            scope.$watch('toggleModal', function (newVal) {
                if (newVal) {
                    var modalHeight = document.querySelector('modal').clientHeight;
                    var modalPositionY = Math.floor(modalHeight / 2);
                    document.querySelector('modal').style.marginTop = -modalPositionY + 'px';
                }
            });

            scope.closeModal = function () {
                $rootScope.disabledMenu = false;
                $rootScope.toggleModal = false;
            };
        }
    };
}