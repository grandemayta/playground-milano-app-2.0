/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("header-without-menu", []).config(HeaderWithoutMenuConfig);
HeaderWithoutMenuConfig.$inject = ["$stateProvider"];


function HeaderWithoutMenuConfig($stateProvider) {

    $stateProvider.state("headerwithoutmenu", {
        abstract: true,
        controller: "HeaderWithoutMenuController",
        templateProvider: ["$q", function ($q) {
            var deferred = $q.defer();
            require.ensure([], function (require) {
                    var template = require("./_views/headerwithoutmenu.html");
                    deferred.resolve(template);
                }
            );
            return deferred.promise;
        }],
        resolve: {
            load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var module = require("./_controller/HeaderWithoutMenuController");
                        $ocLazyLoad.load({name: "header-without-menu.controller"});
                        deferred.resolve(module);
                    }
                );
                return deferred.promise;
            }]
        }
    });

}