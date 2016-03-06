/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("playground-tabs-checkins", []).config(PlaygroundTabsCheckinsConfig);
PlaygroundTabsCheckinsConfig.$inject = ["$stateProvider"];


function PlaygroundTabsCheckinsConfig($stateProvider) {

    $stateProvider
        .state("playground.checkins", {
            url: "/dettaglio-del-campo/:id",
            parent: "playground",
            resolve: {
                load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                            var module = require("./_controller/PlaygroundTabsDetailsCheckinsController");
                            $ocLazyLoad.load({name: "playground-tabs-details.controller"});
                            deferred.resolve(module);
                        }
                    );
                    return deferred.promise;
                }]
            },
            views: {
                checkins: {
                    controller: "PlaygroundTabsDetailsCheckinsController",
                    templateProvider: ["$q", function ($q) {
                        var deferred = $q.defer();
                        require.ensure([], function (require) {
                                var template = require("./_views/checkins.html");
                                deferred.resolve(template);
                            }
                        );
                        return deferred.promise;
                    }]
                }
            }
        });

}