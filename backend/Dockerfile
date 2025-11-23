# Use a smaller Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package files first (for better caching)
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy rest of the app
COPY . .

# Cloud Run will inject PORT, so listen on it
ENV PORT=5000
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
