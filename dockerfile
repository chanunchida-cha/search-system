FROM node:18.14.1-slim

WORKDIR /app
COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "start"]

EXPOSE 3000
