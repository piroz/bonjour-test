# bonjour-test

simple [bonjour](https://www.npmjs.com/package/bonjour) publish daemon

# requirements

You need to install [node.js](https://nodejs.org/)

# how to run

```shell
$ git clone https://github.com/piroz/bonjour-test
$ cd bonjour-test
$ cp config/default.json.sample config/default.json
$ vi config/default.json # edit json entry
$ npm start
```

# daemonize (mac os)

```shell
$ launchctl load me.muraka.bonjour-test.plist
```
