FROM ibmcom/ibmnode:latest
#FROM node:12-slim
LABEL maintainer="fabdulkh@redhat.com"

#RUN apt-get install -y nodejs npm

WORKDIR /app
# Install app dependencies
COPY . /app
# Install production dependencies.
RUN cd /app; npm install --only=production; npm install chai; npm install mongodb; npm instal npm
RUN npm prune --production
ENV PORT 3400

EXPOSE 3400
CMD [ "npm","start" ]
