package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, "pong")
	})

	addr := fmt.Sprintf("%s:%d", "localhost", 8000)
	r.Run(addr)
}
