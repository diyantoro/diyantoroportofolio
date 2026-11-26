package main

import (
	"fmt"
	"portfolio-backend/config"
	"portfolio-backend/controller"
	"portfolio-backend/database"
	"portfolio-backend/models"
	"portfolio-backend/repository"
	"portfolio-backend/routes"
	"portfolio-backend/service"

	"golang.org/x/crypto/bcrypt"
)

func main() {
	cfg := config.LoadConfig()

	database.Connect(cfg)
	database.Migrate()

	seedAdmin()

	authCtrl := &controller.AuthController{
		Service: service.UserService{Repo: repository.UserRepository{}},
	}
	projectCtrl := &controller.ProjectController{
		Service: service.ProjectService{Repo: repository.ProjectRepository{}},
	}
	certCtrl := &controller.CertificateController{
		Service: service.CertificateService{Repo: repository.CertificateRepository{}},
	}
	blogCtrl := &controller.BlogController{
		Service: service.BlogService{Repo: repository.BlogRepository{}},
	}
	msgCtrl := &controller.MessageController{
		Service: service.MessageService{Repo: repository.MessageRepository{}},
	}
	dashCtrl := &controller.DashboardController{}

	router := routes.SetupRouter(authCtrl, projectCtrl, certCtrl, blogCtrl, msgCtrl, dashCtrl)

	addr := fmt.Sprintf(":%s", cfg.AppPort)
	fmt.Printf("Server running on port %s\n", cfg.AppPort)
	router.Run(addr)
}

func seedAdmin() {
	var count int64
	database.DB.Model(&models.User{}).Count(&count)
	if count > 0 {
		return
	}

	hashed, _ := bcrypt.GenerateFromPassword([]byte("admin123"), 14)
	admin := models.User{
		Name:     "Admin",
		Email:    "admin@email.com",
		Password: string(hashed),
	}
	database.DB.Create(&admin)
	fmt.Println("Admin user seeded: admin@email.com / admin123")
}
