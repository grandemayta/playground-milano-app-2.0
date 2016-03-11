/**
 *
 * Created by Gabriel Mayta
 *
 */

angular.module("services.navigation", []).factory("NavigationService", NavigationService);
NavigationService.$inject = ["$state", "$cookies"];

function NavigationService($state, $cookies) {

    var service = {};

    service.goToState = function (state, type, value) {

        switch (type) {
            case "userId":
                _goToState("_userId", state, value);
                break;
            case "playgroundId":
                _goToState("_playgroundId", state, value);
                break;
        }

        function _goToState(key, state, value) {
            $cookies.put(key, value);
            $state.go(state);
        }

    };

    service.getValue = function (type) {
        var checkValue = $cookies.get(`_${type[0]}`);
        return checkValue ? `/${checkValue}` : '';
    };

    return service;

}