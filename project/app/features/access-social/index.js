/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("access-social", []).config(AccessSocialConfig);
AccessSocialConfig.$inject = ["$stateProvider"];


function AccessSocialConfig($stateProvider) {

    $stateProvider.state("social", {
        parent: "headerwithoutmenu",
        url: "/entra",
        controller: "AccessSocialController",
        templateProvider: ["$q", function ($q) {
            var deferred = $q.defer();
            require.ensure([], function (require) {
                    var template = require("./_views/access-social.html");
                    deferred.resolve(template);
                }
            );
            return deferred.promise;
        }],
        resolve: {
            load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var module = require("./_controller/AccessSocialController");
                        $ocLazyLoad.load({name: "access-social.controller"});
                        deferred.resolve(module);
                    }
                );
                return deferred.promise;
            }]
        }
    });

}