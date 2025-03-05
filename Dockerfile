FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

# Build the app
RUN npm run build


EXPOSE 80

