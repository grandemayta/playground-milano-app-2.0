/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("faq-review", []).config(ReviewConfig);
ReviewConfig.$inject = ["$stateProvider"];


function ReviewConfig($stateProvider) {

    $stateProvider
        .state("faq.review", {
            parent: "faq",
            url: "/recensione",
            title: "Servizi Faq",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/faq-review.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }]
        });

}