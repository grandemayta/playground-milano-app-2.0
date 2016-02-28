/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("splashscreen", []).config(SplashscreenConfig);
SplashscreenConfig.$inject = ["$stateProvider", "$urlRouterProvider"];


function SplashscreenConfig($stateProvider, $urlRouterProvider) {

    $stateProvider.state("splashscreen", {
        parent: "headerwithoutmenu",
        url: "/",
        controller: "SplashscreenController",
        templateProvider: ["$q", function ($q) {
            var deferred = $q.defer();
            require.ensure([], function (require) {
                    var template = require("./_views/splashscreen.html");
                    deferred.resolve(template);
                }
            );
            return deferred.promise;
        }],
        resolve: {
            load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var module = require("./_controller/SplashscreenController");
                        $ocLazyLoad.load({name: "splashscreen.controller"});
                        deferred.resolve(module);
                    }
                );
                return deferred.promise;
            }]
        }
    });

    $urlRouterProvider.otherwise("/");

}