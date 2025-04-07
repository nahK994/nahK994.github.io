package main

import (
	"first-app/handler"
	"fmt"

	"github.com/gin-gonic/gin"
)

func main() {
	h := handler.NewHandler()

	r := gin.Default()
	r.GET("/ping", h.Ping)

	addr := fmt.Sprintf("%s:%d", "localhost", 8000)
	r.Run(addr)
}
