/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("configs.state-change", []).run(StateChangeConfig);
StateChangeConfig.$inject = ["$rootScope", "$state", "localStorageService", "COMPONENTS_VALUES"];


function StateChangeConfig($rootScope, $state, localStorageService, COMPONENTS_VALUES) {
    $rootScope.$on("$stateChangeStart", function (event, toState) {

        $rootScope.userData = localStorageService.get("user");
        $rootScope.IS_AUTH = $rootScope.userData || false;
        $rootScope.env = localStorageService.get("ENV") || "PROD";
        $rootScope.currentPage = toState.name;
        $rootScope.toggleMenu = $rootScope.toggleSpinner = $rootScope.toggleModal = false;
        $rootScope.toggleBackButton = toState.backbutton ? true : false;
        $rootScope.language = "it";
        $rootScope.DEVICE = COMPONENTS_VALUES;

        if (!$rootScope.IS_AUTH
            && $rootScope.currentPage !== "splashscreen"
            && $rootScope.currentPage !== "social"
            && $rootScope.currentPage !== "login"
            && $rootScope.currentPage !== "registration"
            && $rootScope.currentPage !== "generatecode"
            && $rootScope.currentPage !== "resetpassword"
            && $rootScope.currentPage !== "playgroundsmap"
            && $rootScope.currentPage !== "playgroundslist"
            && $rootScope.currentPage !== "playgroundtabs"
            && $rootScope.currentPage !== "about"
            && $rootScope.currentPage !== "privacy"
            && $rootScope.currentPage !== "credits"
            && $rootScope.currentPage !== "faq.home"
                // FAQ ISCRIZIONE
            && $rootScope.currentPage !== "faq.iscrizione"
            && $rootScope.currentPage !== "faq.iscrizione.comeiscriversi"
            && $rootScope.currentPage !== "faq.iscrizione.pagamento"
            && $rootScope.currentPage !== "faq.iscrizione.chisiscrive"
            && $rootScope.currentPage !== "faq.iscrizione.cosaserve"
            && $rootScope.currentPage !== "faq.iscrizione.conferma"
            && $rootScope.currentPage !== "faq.iscrizione.cancellazione"
            && $rootScope.currentPage !== "faq.iscrizione.accedi"
                // FAQ SERVIZI
            && $rootScope.currentPage !== "faq.servizi"
            && $rootScope.currentPage !== "faq.servizi.qualiservizi"
            && $rootScope.currentPage !== "faq.servizi.obbligatoria"
            && $rootScope.currentPage !== "faq.servizi.fuorimilano"
            && $rootScope.currentPage !== "faq.servizi.segnalazione"
            && $rootScope.currentPage !== "faq.servizi.recensione") {
            event.preventDefault();
        }
        if ($rootScope.IS_AUTH
            && ($rootScope.currentPage === "splashscreen"
            || $rootScope.currentPage === "social"
            || $rootScope.currentPage === "login"
            || $rootScope.currentPage === "registration")) {
            event.preventDefault();
            $state.transitionTo("map");
        }

    });
}