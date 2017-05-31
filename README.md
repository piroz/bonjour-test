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
$ npm install
$ npm start
```

# daemonize (mac os)

```shell
$ npm run load
```
> If you run [tmux](https://tmux.github.io/) this command is failed. Please quit tmux, and run this command.

# un-daemonize (mac os)

```shell
$ npm run unload
```
> If you run [tmux](https://tmux.github.io/) this command is failed. Please quit tmux, and run this command.
