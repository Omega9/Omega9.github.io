#!/bin/sh

bundle exec jekyll build
git add --all
git commit
git push
