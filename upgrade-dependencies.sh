#!/bin/bash

cd "$(realpath "$(dirname "$(readlink -f "$0")")")" || exit 1

[[ " $@ " =~ ' -c ' ]] && rm -rf ./node_modules ./pnpm-lock.yaml

pnpm upgrade -L
./modify-files-permissions.sh
