package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func HelloworldHandler(c *gin.Context) {
	c.JSON(http.StatusOK, "Hello world people")
}
