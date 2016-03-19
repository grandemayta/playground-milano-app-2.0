/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("playground-tabs-comments", []).config(PlaygroundTabsCommentsConfig);
PlaygroundTabsCommentsConfig.$inject = ["$stateProvider"];


function PlaygroundTabsCommentsConfig($stateProvider) {

    $stateProvider
        .state("playground.comments", {
            url: "/dettaglio-del-campo",
            parent: "playground",
            title: "Commenti",
            resolve: {
                load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                            var module = require("./_controller/PlaygroundTabsCommentsController");
                            $ocLazyLoad.load({name: "playground-tabs-comments.controller"});
                            deferred.resolve(module);
                        }
                    );
                    return deferred.promise;
                }]
            },
            views: {
                comments: {
                    controller: "PlaygroundTabsCommentsController",
                    templateProvider: ["$q", function ($q) {
                        var deferred = $q.defer();
                        require.ensure([], function (require) {
                                var template = require("./_views/comments.html");
                                deferred.resolve(template);
                            }
                        );
                        return deferred.promise;
                    }]
                }
            }
        });

}