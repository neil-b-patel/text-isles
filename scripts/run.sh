#!/usr/bin/env bash

docker build -t neil3patel/text-isles .

docker run -p 3000:3000 docker.io/neil3patel/text-isles:latest
