FROM node:latest

WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev
COPY build/ .
EXPOSE 3000

CMD ["node", "./index.js"]