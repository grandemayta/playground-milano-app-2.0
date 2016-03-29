/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("faq-home", []).config(FaqHomeConfig);
FaqHomeConfig.$inject = ["$stateProvider"];


function FaqHomeConfig($stateProvider) {

    $stateProvider
        .state("faq.home", {
            parent: "faq",
            url: "/domande-frequenti",
            title: "Domande frequenti",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/faq-home.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }]
        });

}