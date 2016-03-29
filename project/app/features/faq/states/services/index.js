/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("faq-services", []).config(FaqServicesConfig);
FaqServicesConfig.$inject = ["$stateProvider"];


function FaqServicesConfig($stateProvider) {

    $stateProvider
        .state("faq.services", {
            parent: "faq",
            url: "/servizi",
            title: "Servizi",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/faq-services.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }]
        });

}