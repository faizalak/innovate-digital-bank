#FROM ibmcom/ibmnode:latest
FROM node:12-slim
LABEL maintainer="fabdulkh@redhat.com"

#RUN apt-get install -y nodejs npm

WORKDIR /app
# Install app dependencies
COPY . /app
# Install production dependencies.
RUN cd /app
RUN rm -rf ~/.node-gyp/
RUN npm -g install npm@7.24.1
RUN npm install -g node-gyp
RUN npm install -g node-pre-gyp
RUN npm install
RUN npm install chai; npm install mongodb
#npm install --only=production;
#RUN npm prune --production
ENV PORT 3400

EXPOSE 3400
CMD [ "npm","app.js" ]
