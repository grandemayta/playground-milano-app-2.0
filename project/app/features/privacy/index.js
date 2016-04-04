/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("privacy", []).config(PrivacyConfig);
PrivacyConfig.$inject = ["$stateProvider"];


function PrivacyConfig($stateProvider) {

    $stateProvider.state("privacy", {
        parent: "headermenu",
        url: "/privacy",
        title: "Privacy",
        templateProvider: ["$q", function ($q) {
            var deferred = $q.defer();
            require.ensure([], function (require) {
                    var template = require("./_views/privacy.html");
                    deferred.resolve(template);
                }
            );
            return deferred.promise;
        }]
    });

}