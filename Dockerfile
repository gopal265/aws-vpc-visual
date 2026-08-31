FROM node:24-alpine

WORK_DIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build