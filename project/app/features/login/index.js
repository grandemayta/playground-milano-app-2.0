/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("login", []).config(LoginConfig);
LoginConfig.$inject = ["$stateProvider"];


function LoginConfig($stateProvider) {

    $stateProvider.state("login", {
        parent: "headerwithoutmenu",
        url: "/login",
        controller: "LoginController",
        templateProvider: ["$q", function ($q) {
            var deferred = $q.defer();
            require.ensure([], function (require) {
                    var template = require("./_views/login.html");
                    deferred.resolve(template);
                }
            );
            return deferred.promise;
        }],
        resolve: {
            load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var module = require("./_controller/LoginController");
                        $ocLazyLoad.load({name: "login.controller"});
                        deferred.resolve(module);
                    }
                );
                return deferred.promise;
            }]
        }
    });

}