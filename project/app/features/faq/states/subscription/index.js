/**
 *
 * Created by Playground Milano
 *
 */

"use strict";


import "./states/howsubscription";
import "./states/payment";
import "./states/whosubscribe";
import "./states/whatyouneed";
import "./states/confirm";
import "./states/cancellation";
import "./states/access";

angular.module("faq-subscription", [
    'faq-howsubscription',
    'faq-payment',
    'faq-whosubscribe',
    'faq-whatyouneed',
    'faq-confirm',
    'faq-cancellation',
    'faq-access'
]).config(FaqSubscriptionConfig);
FaqSubscriptionConfig.$inject = ["$stateProvider"];


function FaqSubscriptionConfig($stateProvider) {

    $stateProvider
        .state("faq.subscription", {
            parent: "faq",
            url: "/iscrizione",
            title: "Iscrizione",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/faq-subscription.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }]
        });

}