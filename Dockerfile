FROM mhart/alpine-node

MAINTAINER Dmytro Bogatov

# Create directory for the app source code
WORKDIR /srv

# Copy the source and restore dependencies
COPY . .

# Expose the port and start the app
EXPOSE 80

ENTRYPOINT node app.js
