/**
 *
 * Created by Gabriel Mayta
 *
 */

angular.module("services.navigation-service", []).factory("Navigation", NavigationService);
NavigationService.$inject = ["Storage", "$state"];

function NavigationService(Storage, $state) {
    return function (state, keys, values) {
        if (_.isArray(keys) && _.isArray(values)) Storage.setItems(keys, values);
        else if (_.isArray(keys) && _.isEmpty(values)) Storage.deleteItems(keys);
        else if (!_.isEmpty(keys) && !_.isEmpty(values)) Storage.setItem(keys, values);
        else if (!_.isEmpty(keys) && _.isEmpty(values)) Storage.deleteItem(keys);
        $state.go(state);
    };
}