package repository

import (
	"portfolio-backend/database"
	"portfolio-backend/models"
)

type UserRepository struct{}
type ProjectRepository struct{}
type CertificateRepository struct{}
type BlogRepository struct{}
type MessageRepository struct{}

func (r *UserRepository) FindByEmail(email string) (*models.User, error) {
	var user models.User
	err := database.DB.Where("email = ?", email).First(&user).Error
	return &user, err
}

func (r *UserRepository) Create(user *models.User) error {
	return database.DB.Create(user).Error
}

func (r *ProjectRepository) FindAll() ([]models.Project, error) {
	var projects []models.Project
	err := database.DB.Order("created_at DESC").Find(&projects).Error
	return projects, err
}

func (r *ProjectRepository) FindByID(id uint) (*models.Project, error) {
	var project models.Project
	err := database.DB.First(&project, id).Error
	return &project, err
}

func (r *ProjectRepository) Create(project *models.Project) error {
	return database.DB.Create(project).Error
}

func (r *ProjectRepository) Update(project *models.Project) error {
	return database.DB.Save(project).Error
}

func (r *ProjectRepository) Delete(id uint) error {
	return database.DB.Delete(&models.Project{}, id).Error
}

func (r *CertificateRepository) FindAll() ([]models.Certificate, error) {
	var certs []models.Certificate
	err := database.DB.Order("created_at DESC").Find(&certs).Error
	return certs, err
}

func (r *CertificateRepository) FindByID(id uint) (*models.Certificate, error) {
	var cert models.Certificate
	err := database.DB.First(&cert, id).Error
	return &cert, err
}

func (r *CertificateRepository) Create(cert *models.Certificate) error {
	return database.DB.Create(cert).Error
}

func (r *CertificateRepository) Update(cert *models.Certificate) error {
	return database.DB.Save(cert).Error
}

func (r *CertificateRepository) Delete(id uint) error {
	return database.DB.Delete(&models.Certificate{}, id).Error
}

func (r *BlogRepository) FindAll() ([]models.BlogPost, error) {
	var posts []models.BlogPost
	err := database.DB.Order("created_at DESC").Find(&posts).Error
	return posts, err
}

func (r *BlogRepository) FindByID(id uint) (*models.BlogPost, error) {
	var post models.BlogPost
	err := database.DB.First(&post, id).Error
	return &post, err
}

func (r *BlogRepository) FindBySlug(slug string) (*models.BlogPost, error) {
	var post models.BlogPost
	err := database.DB.Where("slug = ?", slug).First(&post).Error
	return &post, err
}

func (r *BlogRepository) Create(post *models.BlogPost) error {
	return database.DB.Create(post).Error
}

func (r *BlogRepository) Update(post *models.BlogPost) error {
	return database.DB.Save(post).Error
}

func (r *BlogRepository) Delete(id uint) error {
	return database.DB.Delete(&models.BlogPost{}, id).Error
}

func (r *MessageRepository) FindAll() ([]models.Message, error) {
	var messages []models.Message
	err := database.DB.Order("created_at DESC").Find(&messages).Error
	return messages, err
}

func (r *MessageRepository) Create(message *models.Message) error {
	return database.DB.Create(message).Error
}

func (r *MessageRepository) Delete(id uint) error {
	return database.DB.Delete(&models.Message{}, id).Error
}
