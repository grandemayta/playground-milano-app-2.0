/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("faq-confirm", []).config(FaqConfirmConfig);
FaqConfirmConfig.$inject = ["$stateProvider"];


function FaqConfirmConfig($stateProvider) {

    $stateProvider
        .state("faq.confirm", {
            parent: "faq",
            url: "/conferma",
            title: "Conferma",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/faq-confirm.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }]
        });

}