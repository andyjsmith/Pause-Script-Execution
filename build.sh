#!/bin/bash

rm -rf dist
mkdir dist

cp -r icons/ manifest.json worker.js dist/

# Create zip of dist
pushd dist
zip -r "$OLDPWD/pause-script-execution.zip" .
popd