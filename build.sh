#!/bin/bash

set -e

npm install
bower install --allow-root
gulp deploy
