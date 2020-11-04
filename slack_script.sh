#!/bin/bash
# JSON payload is currently formatted for Discord webhooks despite filename
if [ $# -ne 2 ]; then
    echo $0: usage: slack_script.sh webhookurl [dev, master]
    exit 1
fi

url=$1
branch=$2
commit=$3

if [ $branch = "dev" ]; then
  content="A new DEVELOPMENT build has been published."
  expo_url="https://exp.host/@cnhtechsoftware/solstice?release-channel=development"
elif [ $branch = "master" ]; then
  content="A new PRODUCTION build has been published."
  expo_url="https://exp.host/@cnhtechsoftware/solstice"
else
    echo "Input must either dev or master after webhook url"
    echo $branch
    exit 1
fi

color=1942002

COMMIT_SUBJECT="$(git log -1 "$TRAVIS_COMMIT" --pretty="%s")"
COMMIT_MESSAGE="$(git log -1 "$TRAVIS_COMMIT" --pretty="%b")" | sed -E ':a;N;$!ba;s/\r{0,1}\n/\\n/g'

if [ ${#COMMIT_SUBJECT} -gt 256 ]; then
  COMMIT_SUBJECT="$(echo "$COMMIT_SUBJECT" | cut -c 1-253)"
  COMMIT_SUBJECT+="..."
fi

WEBHOOK_DATA='{
  "embeds": [ {
    "color": '$color',
    "author": {
      "name": "'"$content"'",
      "url": "'"$expo_url"'"
    },
    "title": "'"$COMMIT_SUBJECT"'",
    "url": "'"$expo_url"'",
    "description": "Open up the app in Expo for testing and usage."
  } ]
}'

curl -v -X POST -H 'Content-type: application/json' --data "${WEBHOOK_DATA//	/ }" "$url"
