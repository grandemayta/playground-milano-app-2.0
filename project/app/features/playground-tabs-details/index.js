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
            url: "/dettaglio-del-campo",
            parent: "playground",
            title: "Campo",
            resolve: {
                load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                            var module = require("./_controller/PlaygroundTabsDetailsController");
                            $ocLazyLoad.load({name: "playground-tabs-details.controller"});
                            deferred.resolve(module);
                        }
                    );
                    return deferred.promise;
                }],
                playgroundDetailsResponse: ["HttpWrapper", function (HttpWrapper) {
                    return HttpWrapper("GET", "playgrounds:idPlayground");
                }]
            },
            views: {
                home: {
                    controller: "PlaygroundTabsDetailsController",
                    templateProvider: ["$q", function ($q) {
                        var deferred = $q.defer();
                        require.ensure([], function (require) {
                                var template = require("./_views/details.html");
                                deferred.resolve(template);
                            }
                        );
                        return deferred.promise;
                    }]
                }
            }
        });

}