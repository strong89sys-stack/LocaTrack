FROM node:18.17.0-alpine
WORKDIR /resources/js
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]
