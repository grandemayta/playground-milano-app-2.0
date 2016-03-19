/**
 *
 * Created by Gabriel Mayta
 *
 */

angular.module("services.storage-service", []).factory("Storage", StorageService);
StorageService.$inject = ["$cookies"];

function StorageService($cookies) {

    var factory = {};

    factory.setItem = function (key, value) {
        key = `_${key}`;
        if (_.isObject(value)) $cookies.putObject(key, value);
        else $cookies.put(key, value);
    };

    factory.getItem = function (key) {
        key = `_${key}`;
        var checkValue = $cookies.get(key);
        return checkValue || '';
    };

    return factory;
}