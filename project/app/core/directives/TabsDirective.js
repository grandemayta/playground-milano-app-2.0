/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("directives.tabs", []).directive("tabs", Tabs);
Tabs.$inject = ['$rootScope', '$timeout', '$state'];


function Tabs($rootScope, $timeout, $state) {
    return {
        restrict: 'E',
        link: function (scope, element) {

            element.ready(function () {
                var tabPrev = 0;

                $rootScope.currentTabPage = $rootScope.currentPage + '_' + 0;

                var myTabs = new Swiper(element[0], {
                    speed: 400,
                    allowSwipeToPrev: false,
                    onSlideChangeStart: function (e) {
                        $timeout(function () {
                            console.log($rootScope.currentPage);
                            $rootScope.currentTabPage = $rootScope.currentPage + '_' + e.activeIndex;
                            switch (e.activeIndex) {
                                case 0:
                                    $state.go("playground.details", {id: "558710e7627992030032a02f"});
                                    break;
                                case 1:
                                    $state.go("playground.checkins", {id: "558710e7627992030032a02f"});
                                    break;
                                case 2:
                                    $state.go("playground.comments", {id: "558710e7627992030032a02f"});
                                    break;
                            }
                        }, 200);
                        document.querySelectorAll('#tabs-navigation li i')[tabPrev].classList.remove('active-tab');
                        document.querySelectorAll('#tabs-navigation li i')[e.activeIndex].classList.add('active-tab');
                        tabPrev = e.activeIndex;
                        this.allowSwipeToPrev = !e.isBeginning;
                        this.allowSwipeToNext = !e.isEnd;
                    }
                });

                scope.changeTab = function (tab) {
                    if (myTabs.activeIndex !== tab) myTabs._slideTo(tab);
                };

            });
        }
    };
}