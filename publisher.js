"use strict";

var bonjour = require("bonjour")();

/**
 * BonjourPublisher
 * 
 * @class BonjourPublisher
 */
class BonjourPublisher {
    /**
     * start bonjour announcement
     * 
     * @static
     * @param {any} configs
     */
    static publish(configs) {
        var config;

        for (var i in configs) {
            config = configs[i];
            console.log("publish: ");
            console.dir(config);
            bonjour.publish(config);
        }
    }
}

module.exports = BonjourPublisher;