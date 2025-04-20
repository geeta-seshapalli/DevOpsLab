# Use Node.js LTS version as base
FROM node:23-slim

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Expose app port
EXPOSE 8080

# Start app
CMD ["node", "app.js"]
