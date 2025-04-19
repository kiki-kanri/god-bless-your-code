#!/bin/bash

git config --replace-all core.filemode true
find . -name node_modules -prune -o -type f -exec chmod 600 {} +
find . -name node_modules -prune -o -type d -exec chmod 700 {} +
find . -name bin -type d -exec chmod 700 -R {} +
find . -name node_modules -prune -o -name '*.sh' -type f -exec chmod 700 {} +
