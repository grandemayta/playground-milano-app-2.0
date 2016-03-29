/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("faq-whosubscribe", []).config(FaqWhoSubscribeConfig);
FaqWhoSubscribeConfig.$inject = ["$stateProvider"];


function FaqWhoSubscribeConfig($stateProvider) {

    $stateProvider
        .state("faq.whosubscribe", {
            parent: "faq",
            url: "/chi-si-scrive",
            title: "Chi si scrive",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/faq-whosubscribe.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }]
        });

}