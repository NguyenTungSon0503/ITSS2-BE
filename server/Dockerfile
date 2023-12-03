FROM node:18-alpine

ARG DATABASE_URL

WORKDIR /app

COPY package*.json ./

RUN chown -R node:node /app

USER node

RUN npm install

RUN mkdir uploads

COPY . .

RUN npm run prisma:generate

CMD npm run prisma:docker && npm start
