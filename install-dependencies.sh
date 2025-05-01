#!/bin/bash

cd "$(realpath "$(dirname "$(readlink -f "$0")")")" || exit 1

pnpm i
./modify-files-permissions.sh
