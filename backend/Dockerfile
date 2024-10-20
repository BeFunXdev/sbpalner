FROM node:22-alpine
WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN npx prisma generate

RUN yarn build

RUN chmod -R 777 .

EXPOSE 8000

CMD ["yarn", "start:prod"]