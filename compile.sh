../closure-library/closure/bin/build/closurebuilder.py \
--root=closure-library/ \
--root=owntra/ \
--namespace="owntra.start" \
--output_mode=compiled \
--compiler_jar=../closure-library/compiler.jar \
--compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS" \
> owntra.js
