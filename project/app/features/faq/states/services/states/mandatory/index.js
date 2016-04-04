/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("faq-mandatory", []).config(MandatoryConfig);
MandatoryConfig.$inject = ["$stateProvider"];


function MandatoryConfig($stateProvider) {

    $stateProvider
        .state("faq.mandatory", {
            parent: "faq",
            url: "/obbligatoria",
            title: "Servizi Faq",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/faq-mandatory.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }]
        });

}