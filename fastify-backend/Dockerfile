FROM node:23.11.1-alpine3.21

# Create app directory
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

# Install app dependencies
COPY --chown=node:node package*.json ./

RUN npm install -g typescript

# COPY --chown=node:node . .
USER node

# RUN npm install

# If you are building your code for production
RUN npm ci

# Bundle app source
COPY --chown=node:node . .

RUN npm run build

#EXPOSE 3000

CMD [ "npm", "start" ]
