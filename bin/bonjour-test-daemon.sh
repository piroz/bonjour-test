#!/bin/bash

set -e

PATH=/usr/local/bin:/usr/bin

cd $(dirname ${BASH_SOURCE[0]})
cd $(dirname $(pwd))

node index.js
