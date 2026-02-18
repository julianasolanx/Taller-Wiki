FROM eclipse-temurin:21-jdk-jammy

# Install Maven dependencies needed for wrapper
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy everything
COPY . .

# Make mvnw executable
RUN chmod +x mvnw

EXPOSE 8080

# Run the app using Maven Wrapper
CMD ["./mvnw", "spring-boot:run"]
