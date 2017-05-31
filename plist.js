const fs = require("fs");
var plist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN"
          "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>Label</key>
    <string>me.muraka.bonjour-test.plist</string>
    <key>ProgramArguments</key>
    <array>
      <string>${__dirname}/bin/bonjour-test-daemon.sh</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>StandardErrorPath</key>
    <string>/dev/null</string>
    <key>StandardOutPath</key>
    <string>/dev/null</string>
  </dict>
</plist>
`;

fs.writeFile(__dirname + "/me.muraka.bonjour-test.plist", plist, (err) => {
  if (err) {
    throw err;
  }
});