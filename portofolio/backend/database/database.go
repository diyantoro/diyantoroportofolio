package database

import (
	"fmt"
	"portfolio-backend/config"
	"portfolio-backend/models"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var DB *gorm.DB

func Connect(cfg *config.Config) {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		cfg.DBUser, cfg.DBPassword, cfg.DBHost, cfg.DBPort, cfg.DBName,
	)

	var err error
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})
	if err != nil {
		panic("Failed to connect to database: " + err.Error())
	}

	fmt.Println("Database connected successfully")
}

func Migrate() {
	DB.AutoMigrate(
		&models.User{},
		&models.Project{},
		&models.Certificate{},
		&models.BlogPost{},
		&models.Message{},
	)
	fmt.Println("Database migrated successfully")
}
