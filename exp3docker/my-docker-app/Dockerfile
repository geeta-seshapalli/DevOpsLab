# Use official Node.js image as the base
FROM node:23-slim


# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which the app will run
EXPOSE 8080

# Command to run the application
CMD [ "node", "app.js" ]
