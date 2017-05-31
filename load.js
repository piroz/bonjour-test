const cp = require("child_process");
const fs = require("fs-extra");

var plist_path = __dirname + "/me.muraka.bonjour-test.plist";
var home_plist_path = process.env.HOME + "/Library/LaunchAgents/me.muraka.bonjour-test.plist";

switch (process.argv[2]) {
    case '--unload':
        console.log("unload");
        cp.spawn("launchctl", ["unload", plist_path], { detached: true });
        fs.unlink(home_plist_path, (err) => {
            if (err) {
                throw err;
            }
        });
        break;
    case '--load':
    default:
        console.log("load");
        fs.copy(plist_path, home_plist_path, (err) => {
            if (err) {
                throw err;
            }
            cp.spawn("launchctl", ["load", plist_path], { detached: true });
        });
        break;
}
