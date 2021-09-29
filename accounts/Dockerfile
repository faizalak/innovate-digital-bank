FROM ibmcom/ibmnode:latest
#FROM node:12-slim
LABEL maintainer="fabdulkh@redhat.com"

#RUN apt-get install -y nodejs npm
#RUN apt-get install -y pyhton

WORKDIR /app
# Install app dependencies
COPY . /app
RUN cd /app; npm install; npm install chai; npm prune --development
ENV NODE_ENV development
ENV PORT 3400

EXPOSE 3400
CMD [ "npm","start" ]
