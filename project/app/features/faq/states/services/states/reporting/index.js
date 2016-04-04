/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("faq-reporting", []).config(ReportingConfig);
ReportingConfig.$inject = ["$stateProvider"];


function ReportingConfig($stateProvider) {

    $stateProvider
        .state("faq.reporting", {
            parent: "faq",
            url: "/segnalazione",
            title: "Servizi Faq",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/faq-reporting.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }]
        });

}