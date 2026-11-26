package routes

import (
	"portfolio-backend/controller"
	"portfolio-backend/middleware"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func SetupRouter(
	authCtrl *controller.AuthController,
	projectCtrl *controller.ProjectController,
	certCtrl *controller.CertificateController,
	blogCtrl *controller.BlogController,
	msgCtrl *controller.MessageController,
	dashCtrl *controller.DashboardController,
) *gin.Engine {
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		AllowCredentials: true,
	}))

	r.Static("/uploads", "./uploads")

	api := r.Group("/api")
	{
		auth := api.Group("/auth")
		{
			auth.POST("/login", authCtrl.Login)
			auth.POST("/register", authCtrl.Register)
		}

		api.GET("/projects", projectCtrl.GetAll)
		api.GET("/projects/:id", projectCtrl.GetByID)
		api.GET("/certificates", certCtrl.GetAll)
		api.GET("/certificates/:id", certCtrl.GetByID)
		api.GET("/blogs", blogCtrl.GetAll)
		api.GET("/blogs/:id", blogCtrl.GetByID)
		api.GET("/blogs/slug/:slug", blogCtrl.GetBySlug)
		api.POST("/messages", msgCtrl.Create)

		protected := api.Group("")
		protected.Use(middleware.AuthMiddleware())
		{
			protected.POST("/projects", projectCtrl.Create)
			protected.PUT("/projects/:id", projectCtrl.Update)
			protected.DELETE("/projects/:id", projectCtrl.Delete)
			protected.POST("/certificates", certCtrl.Create)
			protected.PUT("/certificates/:id", certCtrl.Update)
			protected.DELETE("/certificates/:id", certCtrl.Delete)
			protected.POST("/blogs", blogCtrl.Create)
			protected.PUT("/blogs/:id", blogCtrl.Update)
			protected.DELETE("/blogs/:id", blogCtrl.Delete)
			protected.GET("/messages", msgCtrl.GetAll)
			protected.DELETE("/messages/:id", msgCtrl.Delete)
			protected.GET("/dashboard/stats", dashCtrl.Stats)
		}
	}

	return r
}
