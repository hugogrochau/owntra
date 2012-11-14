#!/bin/sh

cd ~/Documents/prog/projects/owntra/

../closure-library/closure/bin/build/closurebuilder.py \
--root=../closure-library/ \
--root=owntra/ \
--namespace="owntra.Game" \
--output_mode=compiled \
--compiler_jar=../closure-library/compiler.jar \
--compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS" \
> static/scripts/owntra.js
