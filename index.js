"use strict"

var config = require("config");
var publisher = require("./publisher");

publisher.publish(config.publishto);
