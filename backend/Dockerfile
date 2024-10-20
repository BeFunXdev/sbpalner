FROM node:22-alpine
RUN mkdir /app && chown node:node /app
WORKDIR /app

USER node
COPY --chown=node:node package.json package-lock.json* ./

RUN yarn

COPY --chown=node:node . .

RUN npx prisma generate

RUN yarn build

RUN chmod -R 777 .

EXPOSE 8000

CMD ["yarn", "start:prod"]