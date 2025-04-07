FROM golang:1.23-alpine

WORKDIR /go/src/app

COPY . .

RUN go mod download
RUN go build -o main main.go

CMD ["./main"]
EXPOSE 8000