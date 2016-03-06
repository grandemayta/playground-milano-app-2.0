/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("playground-comments", []).config(PlaygroundCommentsConfig);
PlaygroundCommentsConfig.$inject = ["$stateProvider"];


function PlaygroundCommentsConfig($stateProvider) {

    $stateProvider
        .state("playground.comments", {
            url: "/dettaglio-del-campo/:id",
            parent: "playground",
            resolve: {
                load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                            var module = require("./_controller/PlaygroundTabsDetailsCommentsController");
                            $ocLazyLoad.load({name: "playground-comments.controller"});
                            deferred.resolve(module);
                        }
                    );
                    return deferred.promise;
                }]
            },
            views: {
                comments: {
                    controller: "PlaygroundTabsDetailsCommentsController",
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