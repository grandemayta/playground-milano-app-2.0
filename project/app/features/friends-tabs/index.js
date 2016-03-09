/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("friends-tabs", []).config(FriendsTabsConfig);
FriendsTabsConfig.$inject = ["$stateProvider"];


function FriendsTabsConfig($stateProvider) {

    $stateProvider
        .state("friends", {
            abstract: true,
            parent: "headermenu",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/friends-tabs.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }]
        });

}