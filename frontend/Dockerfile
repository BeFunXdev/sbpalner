FROM node:22-alpine

WORKDIR /app

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]