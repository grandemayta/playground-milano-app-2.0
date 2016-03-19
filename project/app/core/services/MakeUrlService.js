/**
 *
 * Created by Gabriel Mayta
 *
 */

angular.module("services.make-url-service", []).factory("MakeUrl", MakeUrlService);
MakeUrlService.$inject = ["Storage"];

function MakeUrlService(Storage) {

    return function (url) {

        var builUrl = url;
        var urlSplit = url.split('/');

        if (urlSplit.length > 0) {
            builUrl = urlSplit[0];
            urlSplit = _.tail(urlSplit);

            _.each(urlSplit, function (key) {
                var getKeyValue = Storage.getItem(key);
                if (getKeyValue) builUrl += `/${getKeyValue}`;
            });

        }

        return builUrl;

    };

}