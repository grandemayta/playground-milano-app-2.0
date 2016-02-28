/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("configs.language", []).config(LanguageConfig);
LanguageConfig.$inject = ["$translateProvider"];


function LanguageConfig($translateProvider) {

    $translateProvider
        .translations('en', require('../../../languages/en'))
        .translations('it', require('../../../languages/it'))
        .translations('es', require('../../../languages/es'))
        .preferredLanguage('it');

    $translateProvider.useSanitizeValueStrategy('escaped');
}