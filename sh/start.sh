#!/bin/bash

# Start the zareian-PANTOhealth application using Docker Compose
echo "Starting zareian-PANTOhealth application..."
docker-compose up --build -d

echo "Application started successfully!"
echo "Access the application at: http://localhost:4023"
