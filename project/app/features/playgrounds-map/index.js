/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("playgrounds-map", []).config(PlaygroundsMapConfig);
PlaygroundsMapConfig.$inject = ["$stateProvider", "$urlRouterProvider"];


function PlaygroundsMapConfig($stateProvider) {

    $stateProvider
        .state("playgroundsmap", {
            parent: "headermenu",
            url: "/mappa-dei-campi",
            title: "Mappa dei campi",
            controller: "PlaygroundsMapController",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/playgrounds-map.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }],
            resolve: {
                load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                            var module = require("./_controller/PlaygroundsMapController");
                            $ocLazyLoad.load({name: "playgrounds-map.controller"});
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