/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("menu", []).config(MenuConfig);
MenuConfig.$inject = ["$stateProvider"];


function MenuConfig($stateProvider) {

    $stateProvider.state("headerwithoutmenu", {
        abstract: true,
        controller: "MenuController",
        templateProvider: ["$q", function ($q) {
            var deferred = $q.defer();
            require.ensure([], function (require) {
                    var template = require("./_views/menu.html");
                    deferred.resolve(template);
                }
            );
            return deferred.promise;
        }],
        resolve: {
            load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var module = require("./_controller/MenuController");
                        $ocLazyLoad.load({name: "menu.controller"});
                        deferred.resolve(module);
                    }
                );
                return deferred.promise;
            }]
        }
    });

}