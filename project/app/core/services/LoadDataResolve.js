/**
 *
 * Created by Gabriel Mayta
 *
 */

angular.module("services.load-data-resolve", []).factory("LoadDataResolve", LoadDataResolve);
LoadDataResolve.$inject = ["$rootScope", "$q", "$http", "ENV"];

function LoadDataResolve($rootScope, $q, $http, ENV) {

    return function (method, endpoint, params) {

        var BASE_URL = ENV[$rootScope.env];
        var httpConfigs = [
            {method: method, url: `${BASE_URL}/${endpoint}`},
            {method: method, url: `${BASE_URL}/${endpoint}`, data: params}
        ];

        var httpConfigSelected = _.isEmpty(params) ? httpConfigs[0] : httpConfigs[1];

        var deferred = $q.defer();

        $http(httpConfigSelected).then(
            function (response) {
                deferred.resolve(response.data);
            },
            function (error) {
                deferred.reject(error);
            }
        );

        return deferred.promise;
    };

}