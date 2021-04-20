#!/usr/bin/env sh

set -e

echo 'Start building application'
yarn build

echo 'Goto dist'
cd dist

echo 'Init new repository'
git init
git add -A
git commit -m 'deploy'

echo 'Deploy to Github'
git push -f git@github.com:MartinKukli/vue-recipe-box-v2.git master:gh-pages

cd -