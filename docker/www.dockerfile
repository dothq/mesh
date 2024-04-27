FROM node:18-alpine

WORKDIR /worker/scalar

COPY . .

RUN apk add git

RUN yarn
RUN yarn build

ENTRYPOINT ["node", ".scalar/main.js"]