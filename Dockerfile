# ===== Build stage =====
FROM node:18-alpine AS builder
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
FROM node:18-alpine
WORKDIR /app

# Install a simple static server
RUN npm install -g serve

# Copy build output
COPY --from=builder /app/dist /app/dist

# Expose any port (Swarm host network will map)
EXPOSE 4011

# Start server
CMD ["serve", "-s", "dist", "-l", "4011"]