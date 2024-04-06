#!/bin/sh
yarn build && \
git add dist && \
git commit -m "Build for deployment" && \
git push origin main