/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("faq-payment", []).config(FaqPaymentConfig);
FaqPaymentConfig.$inject = ["$stateProvider"];


function FaqPaymentConfig($stateProvider) {

    $stateProvider
        .state("faq.payment", {
            parent: "faq",
            url: "/pagamento",
            title: "Pagamento",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/faq-payment.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }]
        });

}