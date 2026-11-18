FROM eclipse-temurin:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy the JAR file from the builder stage
COPY target/backend-service-0.0.1-SNAPSHOT.jar /app/backend.jar

# Expose port
EXPOSE 8080

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "/app/backend.jar"]
