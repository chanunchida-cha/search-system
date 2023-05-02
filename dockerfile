FROM node:18.14.1-alpine

WORKDIR /app
COPY . .

RUN npm install

CMD [ "npm", "run", "dev"]

EXPOSE 3000