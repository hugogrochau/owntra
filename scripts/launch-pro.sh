#!/bin/sh

cd ~/Documents/prog/projects/owntra/

scripts/compile.sh
nginx -s stop
nginx
./owntra.py
