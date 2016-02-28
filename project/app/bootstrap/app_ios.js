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
        LocalStorageModule,
        ngLocale,
        pascalprechtTranslate,
        "ui.bootstrap",
        "app.core",
        "features"
    ])
    .constant('COMPONENTS_VALUES', {
        width: document.querySelector('html').clientWidth,
        height: document.querySelector('html').clientHeight,
        header: 70,
        tabs: 40,
        paddingTopHeader: 20,
        backbuttonAccess: 30,
        topMenu: 30,
        fixedBottom: 44,
        titleWidth: document.querySelector('html').clientWidth - 174,
        withHeader: document.querySelector('html').clientHeight - 70,
        withHeaderTab: document.querySelector('html').clientHeight - 110,
        withHeaderTabButton: document.querySelector('html').clientHeight - 154,
        withHeaderButton: document.querySelector('html').clientHeight - 114
    });


angular.bootstrap(document.body, ['app']);