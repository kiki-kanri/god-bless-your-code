#!/bin/bash

set -e

SCRIPT_DIR="$(dirname "$(realpath "${BASH_SOURCE[0]}")")"
cd "$SCRIPT_DIR"

set +e

git config --replace-all core.filemode true
find . -name node_modules -prune -o \( -type f -exec chmod 600 {} + \)
find . -name node_modules -prune -o \( -type d -exec chmod 700 {} + \)
find . -type d -name bin -exec chmod 700 -R {} +
find . -name node_modules -prune -o \( -name '*.sh' -type f -exec chmod 700 {} + \)
