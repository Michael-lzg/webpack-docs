
set -e

npm run docs:build

cd docs/.vuepress/dist


git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Michael-lzg/webpack-docs.git master:gh-pages

cd -