/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("faq-outsidemilan", []).config(OutsideMilanConfig);
OutsideMilanConfig.$inject = ["$stateProvider"];


function OutsideMilanConfig($stateProvider) {

    $stateProvider
        .state("faq.outsidemilan", {
            parent: "faq",
            url: "/fuori-milano",
            title: "Fuori Milano",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/faq-outsidemilan.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }]
        });

}