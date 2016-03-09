/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("friends-tabs-list", []).config(FriendsTabsListConfig);
FriendsTabsListConfig.$inject = ["$stateProvider"];


function FriendsTabsListConfig($stateProvider) {

    $stateProvider
        .state("friends.list", {
            url: "/amici/:id",
            parent: "friends",
            title: "Amici",
            resolve: {
                load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                            var module = require("./_controller/FriendsTabsListController");
                            $ocLazyLoad.load({name: "friends-tabs-list.controller"});
                            deferred.resolve(module);
                        }
                    );
                    return deferred.promise;
                }],
                listResponse: ["LoadDataResolve", function (LoadDataResolve) {
                    return LoadDataResolve("GET", `friends`);
                }]
            },
            views: {
                list: {
                    controller: "FriendsTabsListController",
                    templateProvider: ["$q", function ($q) {
                        var deferred = $q.defer();
                        require.ensure([], function (require) {
                                var template = require("./_views/list.html");
                                deferred.resolve(template);
                            }
                        );
                        return deferred.promise;
                    }]
                }
            }
        });

}