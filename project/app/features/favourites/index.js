/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("favourites", []).config(FavouritesConfig);
FavouritesConfig.$inject = ["$stateProvider"];


function FavouritesConfig($stateProvider) {

    $stateProvider
        .state("favourites", {
            parent: "headermenu",
            url: "/preferiti",
            title: "Campi salvati",
            controller: "FavouritesController",
            templateProvider: ["$q", function ($q) {
                var deferred = $q.defer();
                require.ensure([], function (require) {
                        var template = require("./_views/favourites.html");
                        deferred.resolve(template);
                    }
                );
                return deferred.promise;
            }],
            resolve: {
                load: ["$q", "$ocLazyLoad", function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function (require) {
                            var module = require("./_controller/FavouritesController");
                            $ocLazyLoad.load({name: "favourites.controller"});
                            deferred.resolve(module);
                        }
                    );
                    return deferred.promise;
                }],
                favouritesResponse: ["HttpWrapper", function (HttpWrapper) {
                    return HttpWrapper("GET", "favourites:idUser");
                }]
            }
        });

}