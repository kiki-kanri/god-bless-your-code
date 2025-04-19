#!/bin/bash

set -e

git fetch https://github.com/kiki-kanri/package-template main
git merge FETCH_HEAD
