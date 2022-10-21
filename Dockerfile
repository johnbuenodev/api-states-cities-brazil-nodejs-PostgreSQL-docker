FROM node:18-alpine 
RUN mkdir -p /home/johnbueno/node/server/node_modules && chown -R node:node /home/johnbueno/node/server
WORKDIR /home/johnbueno/node/server
COPY package*.json ./
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000
CMD ["node", "server.js"]