# ===== Build stage =====
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (dev + prod)
RUN npm ci

# Copy source code
COPY . .

# Build TypeScript + Vite
RUN npm run build

# ===== Production stage =====
FROM node:20-alpine
WORKDIR /app

# Install lightweight HTTP server
RUN npm install -g http-server --registry=https://mirror-npm.runflare.com

# Copy build output from builder
COPY --from=builder /app/dist /app/dist

# Expose any port (Docker can map to host)
EXPOSE 4011

# Start http-server
CMD ["http-server", "dist", "-p", "4011", "-c-1"] 
# -c-1 disables caching