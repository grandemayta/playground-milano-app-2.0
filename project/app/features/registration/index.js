/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("registration", []).config(RegistrationConfig);
RegistrationConfig.$inject = ["$stateProvider"];


function RegistrationConfig($stateProvider) {

    $stateProvider.state("registration", {
        parent: "headerwithoutmenu",
        url: "/registrazione",
        controller: "RegistrationController",
        templateProvider: ["$q", function ($q) {
            var deferred = $q.defer();
            require.ensure([], function (require) {
                    var template = require("./_views/registration.html");
                    deferred.resolve(template);
                }
            );
            return deferred.promise;
        }],
        resolve: {
            load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var module = require("./_controller/RegistrationController");
                        $ocLazyLoad.load({name: "registration.controller"});
                        deferred.resolve(module);
                    }
                );
                return deferred.promise;
            }]
        }
    });

}