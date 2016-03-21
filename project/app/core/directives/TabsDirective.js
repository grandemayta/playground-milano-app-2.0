/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

import TabPages                 from "data/tab-pages.json";

angular.module("directives.tabs", []).directive("tabs", TabsDirective);
TabsDirective.$inject = ["$state", "Navigation"];


function TabsDirective($state, Navigation) {
    return {
        restrict: "E",
        link: function (scope, element) {

            element.ready(function () {
                var tabPrev = 0;

                var myTabs = new Swiper(element[0], {
                        speed: 400,
                        allowSwipeToPrev: false,
                        onSlideChangeStart: function (e) {
                            Navigation(TabPages[$state.current.parent][e.activeIndex]);
                            document.querySelectorAll("#tabs-navigation li i")[tabPrev].classList.remove("active-tab");
                            document.querySelectorAll("#tabs-navigation li i")[e.activeIndex].classList.add("active-tab");
                            tabPrev = e.activeIndex;
                            this.allowSwipeToPrev = !e.isBeginning;
                            this.allowSwipeToNext = !e.isEnd;
                        }
                    }
                );

                scope.changeTab = function (tab) {
                    if (myTabs.activeIndex !== tab) myTabs._slideTo(tab);
                };

            });
        }
    };
}