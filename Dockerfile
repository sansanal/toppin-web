# 1. Use the official Node.js 18 base image
FROM node:18-alpine AS builder

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy the package files and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy the rest of the application code
COPY . .

# 5. Build the Next.js application
RUN npm run build

# 6. Use a lightweight server for the final image
FROM node:18-alpine AS runner
WORKDIR /app

# 7. Copy the built files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# 8. Install only production dependencies
RUN npm ci --omit=dev

# 9. Set environment variables
ENV NODE_ENV=production
ENV PORT=80

# 10. Expose the application port
EXPOSE 80

# 11. Start the application
CMD ["npm", "start"]
