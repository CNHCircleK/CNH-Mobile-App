#!/bin/bash
if [ $# -ne 3 ]; then
    echo $0: usage: slack_script.sh webhookurl [dev, master] commit_msg
    exit 1
fi

url=$1
branch=$2
commit=$3

if [ $branch = "dev" ]; then
    curl -X POST -H 'Content-type: application/json' --data '{"text":"A new DEVELOPMENT build has been published to https://exp.host/@cnhtechsoftware/solstice?release-channel=development"}. Last commit: ${commit}' $url

elif [ $branch = "master" ]; then
    curl -X POST -H 'Content-type: application/json' --data '{"text":"A new PRODUCTION build has been published to https://exp.host/@cnhtechsoftware/solstice"}. Last commit: ${commit}' $url
else
    echo "Input must either dev or master after webhook url"
    echo $branch
fi
