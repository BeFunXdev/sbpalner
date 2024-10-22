FROM node:22

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

RUN chown 1000:1002 .

EXPOSE 3000

CMD ["yarn", "start"]