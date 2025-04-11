FROM golang:1.23

WORKDIR /app

COPY . .

# ENV GOPROXY=off

RUN go mod download
RUN go build -o main ./cmd/main.go

EXPOSE 8000

CMD ["./main"]