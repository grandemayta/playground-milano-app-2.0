/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

import                                     "scss/common.scss";
import angular                             from "angular";
import oclazyload                          from "oclazyload";
import uiRouter                            from "angular-ui-router";
import ngTouch                             from "angular-touch";
import ngCookies                           from "angular-cookies";
import LocalStorageModule                  from "angular-local-storage";
import ngLocale                            from "angular-i18n/it-it";
import pascalprechtTranslate               from "angular-translate";
import                                          "lib/ui-bootstrap-custom-tpls-0.12.0";
import                                          "../core";
import                                          "../features";


angular.module("app", [
        oclazyload,
        uiRouter,
        ngTouch,
        ngCookies,
        LocalStorageModule,
        ngLocale,
        pascalprechtTranslate,
        "ui.bootstrap",
        "app.core",
        "features"
    ])
    .constant("COMPONENTS_VALUES", {
        width: document.querySelector("html").clientWidth,
        height: document.querySelector("html").clientHeight,
        header: 50,
        tabs: 40,
        paddingTopHeader: 0,
        backbuttonAccess: 10,
        topMenu: 10,
        fixedBottom: 44,
        titleWidth: document.querySelector("html").clientWidth - 174,
        withHeader: document.querySelector("html").clientHeight - 50,
        withHeaderTab: document.querySelector("html").clientHeight - 90,
        withHeaderTabButton: document.querySelector("html").clientHeight - 134,
        withHeaderButton: document.querySelector("html").clientHeight - 94
    });


angular.bootstrap(document.body, ["app"]);