#FROM ibmcom/ibmnode:latest
FROM node:12-slim
LABEL maintainer="fabdulkh@redhat.com"

#RUN apt-get upgrade
#RUN apt-get install -y python
#RUN find / -name "python" 2>/dev/null

WORKDIR /app
# Install app dependencies
COPY . /app
# Install production dependencies.
RUN cd /app
#RUN rm -rf ~/.node-gyp/
#RUN npm -g install npm 
#@7.24.1

#RUN npm install -g node-gyp
#RUN npm install -g node-pre-gyp
RUN npm config set python /usr/share/gcc-6/python
RUN npm install --only=production
RUN npm install -g chai; npm install -g mongodb
#npm install --only=production;
RUN npm prune --production
ENV PORT 3400

EXPOSE 3400
CMD [ "npm","app.js" ]
