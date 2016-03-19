/**
 *
 * Created by Gabriel Mayta
 *
 */

angular.module("services.http-wrapper-service", []).factory("HttpWrapper", HttpWrapperService);
HttpWrapperService.$inject = ["$rootScope", "$q", "$http", "ENV", "MakeUrl"];

function HttpWrapperService($rootScope, $q, $http, ENV, MakeUrl) {

    return function (method, endpoint, params) {

        var BASE_URL = ENV[$rootScope.env];
        var httpConfigs = [
            {method: method, url: `${BASE_URL}/${MakeUrl(endpoint)}`},
            {method: method, url: `${BASE_URL}/${MakeUrl(endpoint)}`, data: params}
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