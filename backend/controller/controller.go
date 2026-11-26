package controller

import (
	"net/http"
	"portfolio-backend/database"
	"portfolio-backend/models"
	"portfolio-backend/service"
	"strconv"

	"github.com/gin-gonic/gin"
)

type AuthController struct{ Service service.UserService }
type ProjectController struct{ Service service.ProjectService }
type CertificateController struct{ Service service.CertificateService }
type BlogController struct{ Service service.BlogService }
type MessageController struct{ Service service.MessageService }

type LoginRequest struct {
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type RegisterRequest struct {
	Name     string `json:"name" binding:"required"`
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func (ctrl *AuthController) Login(c *gin.Context) {
	var req LoginRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	token, err := ctrl.Service.Login(req.Email, req.Password)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"token": token})
}

func (ctrl *AuthController) Register(c *gin.Context) {
	var req RegisterRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	user, err := ctrl.Service.Register(req.Name, req.Email, req.Password)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, gin.H{"data": user})
}

func (ctrl *ProjectController) GetAll(c *gin.Context) {
	projects, err := ctrl.Service.GetAll()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	if projects == nil {
		projects = []models.Project{}
	}
	c.JSON(http.StatusOK, gin.H{"data": projects})
}

func (ctrl *ProjectController) GetByID(c *gin.Context) {
	id, _ := strconv.ParseUint(c.Param("id"), 10, 32)
	project, err := ctrl.Service.GetByID(uint(id))
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Project not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": project})
}

func (ctrl *ProjectController) Create(c *gin.Context) {
	var project models.Project
	if err := c.ShouldBind(&project); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	file, _ := c.FormFile("image")
	if file != nil {
		path := "uploads/" + file.Filename
		c.SaveUploadedFile(file, path)
		project.Image = "/" + path
	}
	if err := ctrl.Service.Create(&project); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, gin.H{"data": project})
}

func (ctrl *ProjectController) Update(c *gin.Context) {
	id, _ := strconv.ParseUint(c.Param("id"), 10, 32)
	existing, err := ctrl.Service.GetByID(uint(id))
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Project not found"})
		return
	}
	if err := c.ShouldBind(existing); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	file, _ := c.FormFile("image")
	if file != nil {
		path := "uploads/" + file.Filename
		c.SaveUploadedFile(file, path)
		existing.Image = "/" + path
	}
	if err := ctrl.Service.Update(existing); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": existing})
}

func (ctrl *ProjectController) Delete(c *gin.Context) {
	id, _ := strconv.ParseUint(c.Param("id"), 10, 32)
	if err := ctrl.Service.Delete(uint(id)); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Project deleted successfully"})
}

func (ctrl *CertificateController) GetAll(c *gin.Context) {
	certs, err := ctrl.Service.GetAll()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	if certs == nil {
		certs = []models.Certificate{}
	}
	c.JSON(http.StatusOK, gin.H{"data": certs})
}

func (ctrl *CertificateController) GetByID(c *gin.Context) {
	id, _ := strconv.ParseUint(c.Param("id"), 10, 32)
	cert, err := ctrl.Service.GetByID(uint(id))
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Certificate not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": cert})
}

func (ctrl *CertificateController) Create(c *gin.Context) {
	var cert models.Certificate
	if err := c.ShouldBind(&cert); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	file, _ := c.FormFile("image")
	if file != nil {
		path := "uploads/" + file.Filename
		c.SaveUploadedFile(file, path)
		cert.Image = "/" + path
	}
	if err := ctrl.Service.Create(&cert); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, gin.H{"data": cert})
}

func (ctrl *CertificateController) Update(c *gin.Context) {
	id, _ := strconv.ParseUint(c.Param("id"), 10, 32)
	existing, err := ctrl.Service.GetByID(uint(id))
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Certificate not found"})
		return
	}
	if err := c.ShouldBind(existing); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	file, _ := c.FormFile("image")
	if file != nil {
		path := "uploads/" + file.Filename
		c.SaveUploadedFile(file, path)
		existing.Image = "/" + path
	}
	if err := ctrl.Service.Update(existing); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": existing})
}

func (ctrl *CertificateController) Delete(c *gin.Context) {
	id, _ := strconv.ParseUint(c.Param("id"), 10, 32)
	if err := ctrl.Service.Delete(uint(id)); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Certificate deleted successfully"})
}

func (ctrl *BlogController) GetAll(c *gin.Context) {
	posts, err := ctrl.Service.GetAll()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	if posts == nil {
		posts = []models.BlogPost{}
	}
	c.JSON(http.StatusOK, gin.H{"data": posts})
}

func (ctrl *BlogController) GetByID(c *gin.Context) {
	id, _ := strconv.ParseUint(c.Param("id"), 10, 32)
	post, err := ctrl.Service.GetByID(uint(id))
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Blog post not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": post})
}

func (ctrl *BlogController) GetBySlug(c *gin.Context) {
	slug := c.Param("slug")
	post, err := ctrl.Service.GetBySlug(slug)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Blog post not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": post})
}

func (ctrl *BlogController) Create(c *gin.Context) {
	var post models.BlogPost
	if err := c.ShouldBindJSON(&post); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := ctrl.Service.Create(&post); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, gin.H{"data": post})
}

func (ctrl *BlogController) Update(c *gin.Context) {
	id, _ := strconv.ParseUint(c.Param("id"), 10, 32)
	existing, err := ctrl.Service.GetByID(uint(id))
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Blog post not found"})
		return
	}
	if err := c.ShouldBindJSON(existing); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := ctrl.Service.Update(existing); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": existing})
}

func (ctrl *BlogController) Delete(c *gin.Context) {
	id, _ := strconv.ParseUint(c.Param("id"), 10, 32)
	if err := ctrl.Service.Delete(uint(id)); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Blog post deleted successfully"})
}

func (ctrl *MessageController) GetAll(c *gin.Context) {
	messages, err := ctrl.Service.GetAll()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	if messages == nil {
		messages = []models.Message{}
	}
	c.JSON(http.StatusOK, gin.H{"data": messages})
}

func (ctrl *MessageController) Create(c *gin.Context) {
	var message models.Message
	if err := c.ShouldBindJSON(&message); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := ctrl.Service.Create(&message); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, gin.H{"data": message})
}

func (ctrl *MessageController) Delete(c *gin.Context) {
	id, _ := strconv.ParseUint(c.Param("id"), 10, 32)
	if err := ctrl.Service.Delete(uint(id)); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Message deleted successfully"})
}

type DashboardController struct{}

func (ctrl *DashboardController) Stats(c *gin.Context) {
	var projectCount, certCount, blogCount, messageCount int64

	database.DB.Model(&models.Project{}).Count(&projectCount)
	database.DB.Model(&models.Certificate{}).Count(&certCount)
	database.DB.Model(&models.BlogPost{}).Count(&blogCount)
	database.DB.Model(&models.Message{}).Count(&messageCount)

	c.JSON(http.StatusOK, gin.H{
		"projects":     projectCount,
		"certificates": certCount,
		"blogs":        blogCount,
		"messages":     messageCount,
	})
}
