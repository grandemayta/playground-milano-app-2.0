/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("checkin", []).config(CheckinConfig);
CheckinConfig.$inject = ["$stateProvider"];


function CheckinConfig($stateProvider) {

    $stateProvider
        .state("checkin", {
            parent: "headermenu",
            url: "/checkin",
            title: "Checkin",
            controller: "CheckinController",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/checkin.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }],
            resolve: {
                load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                            var module = require("./_controller/CheckinController");
                            $ocLazyLoad.load({name: "checkin.controller"});
                            deferred.resolve(module);
                        }
                    );
                    return deferred.promise;
                }],
                checkinResponse: ["HttpWrapper", function (HttpWrapper) {
                    return HttpWrapper("GET", "playgrounds:idPlayground");
                }]
            }
        });

}