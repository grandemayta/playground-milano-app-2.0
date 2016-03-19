/**
 *
 * Created by Gabriel Mayta
 *
 */

angular.module("services.navigation-service", []).factory("Navigation", NavigationService);
NavigationService.$inject = ["Storage", "$state"];

function NavigationService(Storage, $state) {

    return function (state, key, value) {
        if (!_.isEmpty(key) && !_.isEmpty(value)) Storage.setItem(key, value);
        $state.go(state);
    };

}