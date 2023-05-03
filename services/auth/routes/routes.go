package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/restrictify/services/auth/controllers"
)

func SetupAuthRoutes(app *gin.Engine) {
	app.GET("/", controllers.HelloworldHandler)
}
