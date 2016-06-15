'use strict'
/*global  exports, $,require,_*/

const configFactory = {
    test: {
        name: "test",
        search_url: "http://10.0.6.183:8082/search"
    },
    uat: {
        name: "uat",
        search_url: "http://10.0.6.183:8082/search"
    },
    pro: {
        name: "pro",
        search_url: "http://10.0.6.183:8082/search"
    }
}

let key = localStorage.getItem("configKey") || "test"
let configJson = localStorage.getItem("configJson")

let config = configJson ? JSON.parse(configJson) : configFactory[key];

export default config
exports.key = key



