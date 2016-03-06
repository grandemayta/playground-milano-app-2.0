/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("playground-tabs-details", []).config(PlaygroundTabsDetailsConfig);
PlaygroundTabsDetailsConfig.$inject = ["$stateProvider"];


function PlaygroundTabsDetailsConfig($stateProvider) {

    $stateProvider
        .state("playground.details", {
            url: "/dettaglio-del-campo/:id",
            parent: "playground",
            resolve: {
                load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                            var module = require("./_controller/PlaygroundTabsDetailsHomeController");
                            $ocLazyLoad.load({name: "playground-tabs-details.controller"});
                            deferred.resolve(module);
                        }
                    );
                    return deferred.promise;
                }]
            },
            views: {
                home: {
                    controller: "PlaygroundTabsDetailsHomeController",
                    templateProvider: ["$q", function ($q) {
                        var deferred = $q.defer();
                        require.ensure([], function (require) {
                                var template = require("./_views/home.html");
                                deferred.resolve(template);
                            }
                        );
                        return deferred.promise;
                    }]
                }
            }
        });

}