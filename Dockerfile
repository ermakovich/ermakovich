# syntax = docker/dockerfile:1.10
FROM node:22.11-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml /app/

RUN corepack enable && \
  yarn install --immutable

COPY . /app

RUN \
  --mount=type=cache,target=/app/.cache \
  --mount=type=cache,target=/app/public \
  yarn build && \
  cp -r /app/public /app/build-output
