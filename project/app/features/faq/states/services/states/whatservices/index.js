/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("faq-whatservices", []).config(WhatServicesConfig);
WhatServicesConfig.$inject = ["$stateProvider"];


function WhatServicesConfig($stateProvider) {

    $stateProvider
        .state("faq.whatservices", {
            parent: "faq",
            url: "/quali-servizi",
            title: "Servizi Faq",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/faq-whatservices.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }]
        });

}