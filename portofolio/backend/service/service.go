package service

import (
	"errors"
	"portfolio-backend/models"
	"portfolio-backend/repository"
	"portfolio-backend/utils"
	"strings"
)

type UserService struct{ Repo repository.UserRepository }
type ProjectService struct{ Repo repository.ProjectRepository }
type CertificateService struct{ Repo repository.CertificateRepository }
type BlogService struct{ Repo repository.BlogRepository }
type MessageService struct{ Repo repository.MessageRepository }

func (s *UserService) Register(name, email, password string) (*models.User, error) {
	hashed, err := utils.HashPassword(password)
	if err != nil {
		return nil, err
	}
	user := &models.User{Name: name, Email: email, Password: hashed}
	if err := s.Repo.Create(user); err != nil {
		return nil, errors.New("email already registered")
	}
	return user, nil
}

func (s *UserService) Login(email, password string) (string, error) {
	user, err := s.Repo.FindByEmail(email)
	if err != nil {
		return "", errors.New("invalid credentials")
	}
	if !utils.CheckPassword(password, user.Password) {
		return "", errors.New("invalid credentials")
	}
	token, err := utils.GenerateToken(user.ID, user.Email)
	if err != nil {
		return "", err
	}
	return token, nil
}

func (s *ProjectService) GetAll() ([]models.Project, error) {
	projects, err := s.Repo.FindAll()
	if err != nil {
		return nil, err
	}
	for i := range projects {
		projects[i].Technologies = strings.ReplaceAll(projects[i].Technologies, ",", ", ")
	}
	return projects, nil
}

func (s *ProjectService) GetByID(id uint) (*models.Project, error) {
	return s.Repo.FindByID(id)
}

func (s *ProjectService) Create(project *models.Project) error {
	if project.Technologies != "" {
		project.Technologies = strings.Join(strings.FieldsFunc(project.Technologies, func(r rune) bool { return r == ',' || r == ';' }), ",")
	}
	return s.Repo.Create(project)
}

func (s *ProjectService) Update(project *models.Project) error {
	if project.Technologies != "" {
		project.Technologies = strings.Join(strings.FieldsFunc(project.Technologies, func(r rune) bool { return r == ',' || r == ';' }), ",")
	}
	return s.Repo.Update(project)
}

func (s *ProjectService) Delete(id uint) error {
	return s.Repo.Delete(id)
}

func (s *CertificateService) GetAll() ([]models.Certificate, error) { return s.Repo.FindAll() }
func (s *CertificateService) GetByID(id uint) (*models.Certificate, error) { return s.Repo.FindByID(id) }
func (s *CertificateService) Create(cert *models.Certificate) error { return s.Repo.Create(cert) }
func (s *CertificateService) Update(cert *models.Certificate) error { return s.Repo.Update(cert) }
func (s *CertificateService) Delete(id uint) error { return s.Repo.Delete(id) }

func (s *BlogService) GetAll() ([]models.BlogPost, error) { return s.Repo.FindAll() }
func (s *BlogService) GetByID(id uint) (*models.BlogPost, error) { return s.Repo.FindByID(id) }
func (s *BlogService) GetBySlug(slug string) (*models.BlogPost, error) { return s.Repo.FindBySlug(slug) }
func (s *BlogService) Create(post *models.BlogPost) error { return s.Repo.Create(post) }
func (s *BlogService) Update(post *models.BlogPost) error { return s.Repo.Update(post) }
func (s *BlogService) Delete(id uint) error { return s.Repo.Delete(id) }

func (s *MessageService) GetAll() ([]models.Message, error) { return s.Repo.FindAll() }
func (s *MessageService) Create(message *models.Message) error { return s.Repo.Create(message) }
func (s *MessageService) Delete(id uint) error { return s.Repo.Delete(id) }
