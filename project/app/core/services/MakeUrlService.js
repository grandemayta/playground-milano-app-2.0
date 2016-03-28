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
        var urlSplit = url.split(':');

        if (urlSplit.length > 0) {
            builUrl = urlSplit[0];
            urlSplit = _.tail(urlSplit);

            _.each(urlSplit, function (key) {
                var checkSlash = key.split('/');
                var getKeyValue = "";
                if (checkSlash.length > 1) {
                    key = checkSlash[0];
                    getKeyValue = Storage.getItem(key);
                    if (getKeyValue) builUrl += `/${getKeyValue}/${checkSlash[1]}`;
                }
                else {
                    getKeyValue = Storage.getItem(key);
                    if (getKeyValue) builUrl += `/${getKeyValue}`;
                }

            });

        }

        return builUrl;

    };

}