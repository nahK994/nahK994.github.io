package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Handler struct {
}

func NewHandler() *Handler {
	return &Handler{}
}

func (h *Handler) Ping(c *gin.Context) {
	c.JSON(http.StatusOK, "Pong")
}
