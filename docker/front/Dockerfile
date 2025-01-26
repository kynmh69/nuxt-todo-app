FROM node:23.6

WORKDIR /nuxt/app
COPY src/front/package*.json ./

RUN npm install

COPY src/front .

CMD ["npm", "run", "dev"]
