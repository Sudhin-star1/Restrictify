package main

import (
	"github.com/gin-gonic/gin"
	"github.com/restrictify/services/auth/routes"
)

func main() {
	app := gin.Default()
	routes.SetupAuthRoutes(app)
	app.Run("localhost:8001")
}
