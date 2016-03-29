/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("faq-cancellation", []).config(FaqCancellationConfig);
FaqCancellationConfig.$inject = ["$stateProvider"];


function FaqCancellationConfig($stateProvider) {

    $stateProvider
        .state("faq.cancellation", {
            parent: "faq",
            url: "/cancellazione",
            title: "Cancellazione",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/faq-cancellation.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }]
        });

}