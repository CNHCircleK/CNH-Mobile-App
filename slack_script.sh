#!/bin/bash
if [ $# -ne 1 ]; then
    echo $0: usage: myscript name
    exit 1
fi

url=$1

curl -X POST -H 'Content-type: application/json' --data '{"text":"A new project has been published to https://exp.host/@cnhtechsoftware/"}' $url
