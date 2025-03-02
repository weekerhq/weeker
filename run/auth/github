#!/bin/bash
set -euo pipefail

if !(gh auth token) > /dev/null; then
    gh auth login --web --git-protocol https --scopes "write:packages"
fi

gh auth token | docker login ghcr.io --username oauth --password-stdin
