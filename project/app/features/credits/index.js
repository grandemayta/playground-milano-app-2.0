/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("credits", []).config(CreditsConfig);
CreditsConfig.$inject = ["$stateProvider"];


function CreditsConfig($stateProvider) {

    $stateProvider.state("credits", {
        parent: "headermenu",
        url: "/crediti",
        title: "Crediti",
        templateProvider: ["$q", function ($q) {
            var deferred = $q.defer();
            require.ensure([], function (require) {
                    var template = require("./_views/credits.html");
                    deferred.resolve(template);
                }
            );
            return deferred.promise;
        }]
    });

}