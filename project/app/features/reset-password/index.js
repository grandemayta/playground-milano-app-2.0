/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("reset-password", []).config(ResetPasswordConfig);
ResetPasswordConfig.$inject = ["$stateProvider"];


function ResetPasswordConfig($stateProvider) {

    $stateProvider.state("resetpassword", {
        parent: "headerwithoutmenu",
        url: "/reset-password",
        controller: "ResetPasswordController",
        templateProvider: ["$q", function ($q) {
            var deferred = $q.defer();
            require.ensure([], function (require) {
                    var template = require("./_views/reset-password.html");
                    deferred.resolve(template);
                }
            );
            return deferred.promise;
        }],
        resolve: {
            load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var module = require("./_controller/ResetPasswordController");
                        $ocLazyLoad.load({name: "reset-password.controller"});
                        deferred.resolve(module);
                    }
                );
                return deferred.promise;
            }]
        }
    });

}