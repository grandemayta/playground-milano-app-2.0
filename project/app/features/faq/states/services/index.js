/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

import "./states/outsidemilan";
import "./states/mandatory";
import "./states/whatservices";
import "./states/review";
import "./states/reporting";

angular.module("faq-services", [
    "faq-outsidemilan",
    "faq-mandatory",
    "faq-whatservices",
    "faq-review",
    "faq-reporting"
]).config(FaqServicesConfig);
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