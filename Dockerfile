# Use an official lightweight Node.js image.
# https://hub.docker.com/_/node
FROM node:14-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy local code to the container image.
COPY . ./

# Install production dependencies.
RUN npm install --only=production

# Install `http-server` to serve your app.
RUN npm install -g http-server

# Run the web service on container startup.
CMD [ "http-server", "-p", "7001" ]