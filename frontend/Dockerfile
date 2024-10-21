FROM node:22-alpine

ENV HOME=/home/app-user
RUN useradd -m -d $HOME -s /bin/bash app-user
RUN chown -R app-user:app-user $HOME
USER app-user
WORKDIR $HOME/app

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]