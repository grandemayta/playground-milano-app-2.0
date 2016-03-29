/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("faq-howsubscription", []).config(FaqHowSubscriptionConfig);
FaqHowSubscriptionConfig.$inject = ["$stateProvider"];


function FaqHowSubscriptionConfig($stateProvider) {

    $stateProvider
        .state("faq.howsubscription", {
            parent: "faq",
            url: "/come-iscriversi",
            title: "Come iscriversi",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/faq-howsubscription.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }]
        });

}