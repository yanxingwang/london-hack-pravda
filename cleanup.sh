#!/usr/bin/env bash
set -o errexit

# force remove the perivous container if any
# create a clean data folder in eosio_docker to preserve block data
echo "=== setup/reset data for eosio_docker ==="
docker stop eosio_dcomments_container || true && docker rm --force eosio_dcomments_container || true
rm -rf "./eosio_docker/data"
mkdir -p "./eosio_docker/data"

