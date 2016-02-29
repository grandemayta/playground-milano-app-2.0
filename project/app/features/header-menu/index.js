/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("header-menu", []).config(HeaderMenuConfig);
HeaderMenuConfig.$inject = ["$stateProvider"];


function HeaderMenuConfig($stateProvider) {

    $stateProvider.state("headermenu", {
        abstract: true,
        controller: "HeaderMenuController",
        templateProvider: ["$q", function ($q) {
            var deferred = $q.defer();
            require.ensure([], function (require) {
                    var template = require("./_views/headermenu.html");
                    deferred.resolve(template);
                }
            );
            return deferred.promise;
        }],
        resolve: {
            load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var module = require("./_controller/HeaderMenuController");
                        $ocLazyLoad.load({name: "header-menu.controller"});
                        deferred.resolve(module);
                    }
                );
                return deferred.promise;
            }]
        }
    });

}