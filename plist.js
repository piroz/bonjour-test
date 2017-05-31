const fs = require("fs");
const plist = require('plist');

var json = {
  Label: "me.muraka.bonjour-test.plist",
  "ProgramArguments": [
    `${__dirname}/bin/bonjour-test-daemon.sh`
  ],
  RunAtLoad: true,
  StandardErrorPath: "/dev/null",
  StandardOutPath: "/dev/null"
};

fs.writeFile(__dirname + "/me.muraka.bonjour-test.plist", plist.build(json), (err) => {
  if (err) {
    throw err;
  }
});