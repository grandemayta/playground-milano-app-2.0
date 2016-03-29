/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("faq-access", []).config(FaqAccessConfig);
FaqAccessConfig.$inject = ["$stateProvider"];


function FaqAccessConfig($stateProvider) {

    $stateProvider
        .state("faq.access", {
            parent: "faq",
            url: "/accesso",
            title: "Accesso",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/faq-access.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }]
        });

}