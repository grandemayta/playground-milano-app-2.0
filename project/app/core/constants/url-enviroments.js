/**
 *
 * Created by Playground Milano
 *
 */

"use strict";

angular.module("constants.url-enviroments", []).constant({
    ENV: {
        DEV: "https://playgroundmilano.herokuapp.com/api/v1",
        PROD: "https://playgroundmilano.herokuapp.com/api/v1",
        HEROKU: "http://localhost:5000/api/v1"
    }
});