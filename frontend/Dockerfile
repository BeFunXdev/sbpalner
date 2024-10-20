FROM node:22-alpine
WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

RUN chown -R sbroot:sbroot . && chmod -R 777 .

CMD ["yarn", "start"]