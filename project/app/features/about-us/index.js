/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("aboutus", []).config(AboutUsConfig);
AboutUsConfig.$inject = ["$stateProvider"];


function AboutUsConfig($stateProvider) {

    $stateProvider.state("aboutus", {
        parent: "headermenu",
        url: "/su-di-noi",
        title: "Su di noi",
        templateProvider: ["$q", function ($q) {
            var deferred = $q.defer();
            require.ensure([], function (require) {
                    var template = require("./_views/aboutus.html");
                    deferred.resolve(template);
                }
            );
            return deferred.promise;
        }]
    });

}