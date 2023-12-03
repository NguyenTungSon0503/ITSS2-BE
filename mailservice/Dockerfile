FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN chown -R node:node /app

USER node

RUN npm install

COPY . .

CMD npm start
