#!/bin/sh
if [ $# -ne 1 ]; then
    echo $0: usage: gitscript tagnumber
    exit 1
fi

build_number=$1

setup() {
  git config --global user.email "cnhtech.software@gmail.com"
  git config --global user.name "CNH Software Team"
}

commit_files() {
  git checkout -b master
  git add .
  git commit --message "Release version: $build_number"
}

push() {
  git remote add master https://${GH_TOKEN}@github.com/CNHCircleK/CNH-Mobile-App.git > /dev/null 2>&1
  git push --quiet --set-upstream master master tag $build_number
}

setup
commit
push
