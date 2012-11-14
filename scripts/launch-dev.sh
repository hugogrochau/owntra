#!/bin/sh

cd ~/Documents/prog/projects/owntra

../closure-library/closure/bin/build/depswriter.py \
--root_with_prefix="owntra ../../../owntra/owntra" \
> deps.js

google-chrome index.html
