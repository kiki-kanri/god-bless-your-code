#!/bin/bash

set -e

pnpm upgrade -L
./modify-files-permissions.sh
