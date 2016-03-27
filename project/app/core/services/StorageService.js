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
        $cookies.putObject(key, value);
    };

    factory.setItems = function (keys, values) {
        _.each(values, function (value, index) {
            keys[index] = `_${keys[index]}`;
            $cookies.putObject(keys[index], value);
        });
    };

    factory.getItem = function (key) {
        var _key = key;
        key = `_${key}`;
        var checkValue = $cookies.getObject(key);
        if (_key !== "idUser" && _key !== "idPlayground" && _key !== "sessionData") this.deleteItem(_key);
        return checkValue || '';
    };

    factory.deleteItem = function (key) {
        key = `_${key}`;
        $cookies.remove(key);
    };

    factory.deleteItems = function (keys) {
        _.each(keys, function (key) {
            key = `_${key}`;
            $cookies.remove(key);
        });
    };

    return factory;
}