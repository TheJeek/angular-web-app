@echo off
echo Stopping services...
docker-compose down

echo Cleaning and rebuilding backend...
cd backend-service
call mvn clean package -DskipTests
cd ..

echo Ensuring database is running...
docker-compose up -d postgresdb

echo Waiting for database to be ready...
timeout /t 5 >nul  REM Give it a few seconds to initialize

echo Restarting services...
docker-compose up --build -d backend frontend prometheus grafana postgres-exporter nginx-exporter

echo Cleaning up Dangling docker images...5
docker image prune -f

echo Deployment complete!