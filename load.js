const cp = require("child_process");
var plist_path = __dirname + "/me.muraka.bonjour-test.plist";

switch (process.argv[1]) {
    case '--unload':
        cp.spawn("launchctl", ["unload", plist_path], { detached: true });
        break;
    case '--load':
    default:
        cp.spawn("launchctl", ["load", plist_path], { detached: true });
        break;
}
