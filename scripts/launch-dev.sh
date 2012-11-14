#!/bin/sh

cd ~/Documents/prog/projects/owntra

../closure-library/closure/bin/build/depswriter.py \
--root_with_prefix="src ../../../owntra/src" \
> deps.js

google-chrome index.html
