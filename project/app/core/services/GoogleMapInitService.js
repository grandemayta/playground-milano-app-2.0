/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("services.google-map-init", []).factory("GoogleMapInit", GoogleMapInit);
GoogleMapInit.$inject = ["$window", "$q"];


function GoogleMapInit($window, $q) {

    var CONFIG = {
        URL: "https://maps.googleapis.com/maps/api/js",
        VERSION: "v=3.exp",
        KEY: "AIzaSyDcJMN_DMnXSur4fhXRupMZVuEDbC2Z2dk",
        SENSOR: false,
        CALLBACK: "init"
    };

    var defer = $q.defer();

    function loadMapScript() {
        var script = document.createElement("script");
        script.src = CONFIG.URL + "?" + CONFIG.VERSION + "&key=" + CONFIG.KEY + "&sensor=" + CONFIG.SENSOR + "&callback=" + CONFIG.CALLBACK;
        document.body.appendChild(script);
    }

    $window.init = function () {
        defer.resolve();
    };

    loadMapScript();

    return defer.promise;
}

