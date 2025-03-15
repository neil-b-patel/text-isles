FROM node:22.14-alpine AS base
WORKDIR /usr/src/text-isle

RUN apk update && apk upgrade && apk clean

COPY .yarnrc.yml next.config.ts package.json tsconfig.json ./
COPY /app ./app

RUN corepack enable
RUN yarn install
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
