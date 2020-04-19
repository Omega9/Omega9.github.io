#!/bin/sh

bundle exec jekyll clean
bundle exec jekyll build
git add --all
git commit
git push
