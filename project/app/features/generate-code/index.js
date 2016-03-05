/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("generate-code", []).config(GenerateCodeConfig);
GenerateCodeConfig.$inject = ["$stateProvider"];


function GenerateCodeConfig($stateProvider) {

    $stateProvider.state("generatecode", {
        parent: "headerwithoutmenu",
        url: "/generate-code",
        controller: "GenerateCodeController",
        templateProvider: ["$q", function ($q) {
            var deferred = $q.defer();
            require.ensure([], function (require) {
                    var template = require("./_views/generate-code.html");
                    deferred.resolve(template);
                }
            );
            return deferred.promise;
        }],
        resolve: {
            load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var module = require("./_controller/GenerateCodeController");
                        $ocLazyLoad.load({name: "generate-code.controller"});
                        deferred.resolve(module);
                    }
                );
                return deferred.promise;
            }]
        }
    });

}