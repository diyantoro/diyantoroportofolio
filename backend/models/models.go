package models

import "time"

type User struct {
	ID        uint      `json:"id" gorm:"primaryKey"`
	Name      string    `json:"name" gorm:"size:255;not null"`
	Email     string    `json:"email" gorm:"size:255;uniqueIndex;not null"`
	Password  string    `json:"-" gorm:"size:255;not null"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type Project struct {
	ID           uint      `json:"id" gorm:"primaryKey"`
	Title        string    `json:"title" gorm:"size:255;not null"`
	Description  string    `json:"description" gorm:"type:text;not null"`
	Category     string    `json:"category" gorm:"size:100;not null"`
	Technologies string    `json:"technologies" gorm:"type:text"`
	GithubURL    string    `json:"github_url" gorm:"size:500"`
	DemoURL      string    `json:"demo_url" gorm:"size:500"`
	Image        string    `json:"image" gorm:"size:500"`
	CreatedAt    time.Time `json:"created_at"`
	UpdatedAt    time.Time `json:"updated_at"`
}

type Certificate struct {
	ID        uint      `json:"id" gorm:"primaryKey"`
	Title     string    `json:"title" gorm:"size:255;not null"`
	Issuer    string    `json:"issuer" gorm:"size:255"`
	Category  string    `json:"category" gorm:"size:100;not null"`
	Image     string    `json:"image" gorm:"size:500"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type BlogPost struct {
	ID        uint      `json:"id" gorm:"primaryKey"`
	Title     string    `json:"title" gorm:"size:255;not null"`
	Slug      string    `json:"slug" gorm:"size:255;uniqueIndex;not null"`
	Content   string    `json:"content" gorm:"type:longtext;not null"`
	Excerpt   string    `json:"excerpt" gorm:"type:text"`
	Tags      string    `json:"tags" gorm:"size:500"`
	Image     string    `json:"image" gorm:"size:500"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type Message struct {
	ID        uint      `json:"id" gorm:"primaryKey"`
	Name      string    `json:"name" gorm:"size:255;not null"`
	Email     string    `json:"email" gorm:"size:255;not null"`
	Subject   string    `json:"subject" gorm:"size:255;not null"`
	Message   string    `json:"message" gorm:"type:text;not null"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
