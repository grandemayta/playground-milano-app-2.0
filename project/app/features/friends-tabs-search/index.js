/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("friends-tabs-search", []).config(FriendsTabsListConfig);
FriendsTabsListConfig.$inject = ["$stateProvider"];


function FriendsTabsListConfig($stateProvider) {

    $stateProvider
        .state("friends.search", {
            url: "/amici",
            parent: "friends",
            title: "Cerca",
            resolve: {
                load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                            var module = require("./_controller/FriendsTabsSearchController");
                            $ocLazyLoad.load({name: "friends-tabs-search.controller"});
                            deferred.resolve(module);
                        }
                    );
                    return deferred.promise;
                }]
            },
            views: {
                search: {
                    controller: "FriendsTabsSearchController",
                    templateProvider: ["$q", function ($q) {
                        var deferred = $q.defer();
                        require.ensure([], function (require) {
                                var template = require("./_views/search.html");
                                deferred.resolve(template);
                            }
                        );
                        return deferred.promise;
                    }]
                }
            }
        });

}