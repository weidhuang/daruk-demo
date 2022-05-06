FROM node:latest

WORKDIR /app
COPY . .
RUN npm install --omit=dev
RUN npm run build
# COPY build/ build/
EXPOSE 3000

CMD ["node", "./build/index.js"]