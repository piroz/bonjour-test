"use strict";

var bonjour = require("bonjour")();

var BonjourPublisher = {
    publish: function(configs) {
        var config;

        for (var i in configs) {
            config = configs[i];
            console.log("publish: ");
            console.dir(config);
            bonjour.publish(config);
        }
    }
};

module.exports = BonjourPublisher;