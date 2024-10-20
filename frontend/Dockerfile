FROM node:22-alpine
RUN mkdir /app && chown node:node /app
WORKDIR /app

USER node
COPY --chown=node:node package.json package-lock.json* ./

RUN yarn

COPY --chown=node:node . .

RUN yarn build

EXPOSE 3000

RUN chmod -R 777 .

CMD ["yarn", "start"]