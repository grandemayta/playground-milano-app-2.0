/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("faq-whatyouneed", []).config(FaqWhatYouNeedConfig);
FaqWhatYouNeedConfig.$inject = ["$stateProvider"];


function FaqWhatYouNeedConfig($stateProvider) {

    $stateProvider
        .state("faq.whatyouneed", {
            parent: "faq",
            url: "/cosa-serve",
            title: "Cosa serve",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/faq-whatyouneed.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }]
        });

}