/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("playgrounds-list", []).config(PlaygroundsListConfig);
PlaygroundsListConfig.$inject = ["$stateProvider", "$urlRouterProvider"];


function PlaygroundsListConfig($stateProvider) {

    $stateProvider
        .state("playgroundslist", {
            parent: "headermenu",
            url: "/lista-dei-campi",
            title: "Lista dei campi",
            controller: "PlaygroundsListController",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/playgrounds-list.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }],
            resolve: {
                load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                            var module = require("./_controller/PlaygroundsListController");
                            $ocLazyLoad.load({name: "playgrounds-list.controller"});
                            deferred.resolve(module);
                        }
                    );
                    return deferred.promise;
                }],
                playgroundsResponse: ["LoadDataResolve", function (LoadDataResolve) {
                    return LoadDataResolve("GET", "playgrounds");
                }]
            }
        });

}