FROM node:22-alpine

ARG UID=1000
ARG GID=1000
ENV UID=${UID}
ENV GID=${GID}
RUN usermod -u $UID node \
  && groupmod -g $GID node

WORKDIR /app

RUN yarn

COPY . .

RUN npx prisma generate

RUN yarn build

EXPOSE 8000

CMD ["yarn", "start:prod"]