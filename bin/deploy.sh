#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

source ~/.bash_profile

if [[ -z "$GITHUB_TOKEN" ]]; then
  echo "no passwd specificed"
  exit 0
fi

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
echo 'bluepen.lazyalex.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git push -f "https://$GITHUB_TOKEN@github.com/YxxY/bluepen.git" master:gh-pages

cd -