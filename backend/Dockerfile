FROM node:22-alpine
WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN npx prisma generate

RUN yarn build

EXPOSE 8000

CMD ["yarn", "start:prod"]