# 1. Use the official Golang image as a build stage
FROM golang:1.21 AS builder

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy go mod and sum files
COPY go.mod ./
COPY go.sum ./

# 4. Download dependencies
RUN go mod download

# 5. Copy the rest of the application code
COPY . .

# 6. Build the Go app
RUN go build -o simple-crud ./cmd/main.go

# 7. Now use a smaller image for the final container
FROM alpine:latest

# 8. Set working directory for final image
WORKDIR /root/

# 9. Copy the built binary from builder stage
COPY --from=builder /app/simple-crud .

# 10. Set environment variables if needed
ENV PORT=8080

# 11. Expose the port the app runs on
EXPOSE 8080

# 12. Command to run the executable
CMD ["./simple-crud"]
