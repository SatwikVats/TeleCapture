FROM --platform=linux/amd64 node:18-alpine

WORKDIR /telecapture-service

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]