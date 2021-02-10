FROM node:14
# Create app directory
WORKDIR /usr/src/app

# Install app depencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]
