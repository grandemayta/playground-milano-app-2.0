/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("playground-tabs", []).config(PlaygroundTabsConfig);
PlaygroundTabsConfig.$inject = ["$stateProvider"];


function PlaygroundTabsConfig($stateProvider) {

    $stateProvider
        .state("playground", {
            abstract: true,
            parent: "headermenu",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/playground-tabs.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }]
        });

}