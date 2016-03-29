/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

import "./states/home";
import "./states/subscription";
import "./states/services";

angular.module("faq", [
    'faq-home',
    'faq-subscription',
    'faq-services'
]).config(FaqConfig);

FaqConfig.$inject = ["$stateProvider"];


function FaqConfig($stateProvider) {

    $stateProvider
        .state("faq", {
            abstract: true,
            parent: "headermenu",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/faq.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }]
        });

}