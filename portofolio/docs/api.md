# Portfolio Website - API Documentation

## Base URL
```
http://localhost:8080/api
```

## Authentication

### Register
```
POST /auth/register
Content-Type: application/json

{
    "name": "Admin",
    "email": "admin@email.com",
    "password": "admin123"
}
```

### Login
```
POST /auth/login
Content-Type: application/json

{
    "email": "admin@email.com",
    "password": "admin123"
}

Response: { "token": "eyJhbGciOiJIUzI1NiIs..." }
```

## Public Endpoints

### Projects

#### Get All Projects
```
GET /projects
Response: { "data": [...] }
```

#### Get Project by ID
```
GET /projects/:id
Response: { "data": {...} }
```

### Certificates

#### Get All Certificates
```
GET /certificates
Response: { "data": [...] }
```

#### Get Certificate by ID
```
GET /certificates/:id
Response: { "data": {...} }
```

### Blog Posts

#### Get All Posts
```
GET /blogs
Response: { "data": [...] }
```

#### Get Post by ID
```
GET /blogs/:id
Response: { "data": {...} }
```

#### Get Post by Slug
```
GET /blogs/slug/:slug
Response: { "data": {...} }
```

### Messages

#### Create Message
```
POST /messages
Content-Type: application/json

{
    "name": "John",
    "email": "john@email.com",
    "subject": "Project Inquiry",
    "message": "Hello, I have a project..."
}

Response: { "data": {...} }
```

## Protected Endpoints (Require Bearer Token)

### Projects

#### Create Project
```
POST /projects
Authorization: Bearer <token>
Content-Type: multipart/form-data

title: "Project Title"
description: "Project Description"
category: "Web Development"
technologies: "React,Node.js,MongoDB"
github_url: "https://github.com/..."
demo_url: "https://demo.com"
image: <file>
```

#### Update Project
```
PUT /projects/:id
Authorization: Bearer <token>
Content-Type: multipart/form-data
```

#### Delete Project
```
DELETE /projects/:id
Authorization: Bearer <token>
```

### Certificates

#### Create Certificate
```
POST /certificates
Authorization: Bearer <token>
Content-Type: multipart/form-data

title: "Certificate Title"
issuer: "Issuer Name"
category: "Web Development"
image: <file>
```

#### Update Certificate
```
PUT /certificates/:id
Authorization: Bearer <token>
```

#### Delete Certificate
```
DELETE /certificates/:id
Authorization: Bearer <token>
```

### Blog Posts

#### Create Post
```
POST /blogs
Authorization: Bearer <token>
Content-Type: application/json

{
    "title": "Post Title",
    "slug": "post-title",
    "content": "Post content here...",
    "excerpt": "Short excerpt",
    "tags": "React,JavaScript",
    "image": "https://example.com/image.jpg"
}
```

#### Update Post
```
PUT /blogs/:id
Authorization: Bearer <token>
```

#### Delete Post
```
DELETE /blogs/:id
Authorization: Bearer <token>
```

### Messages

#### Get All Messages
```
GET /messages
Authorization: Bearer <token>
```

#### Delete Message
```
DELETE /messages/:id
Authorization: Bearer <token>
```

### Dashboard

#### Get Statistics
```
GET /dashboard/stats
Authorization: Bearer <token>

Response: {
    "projects": 10,
    "certificates": 5,
    "blogs": 8,
    "messages": 12
}
```

## Error Responses

### 400 Bad Request
```json
{ "error": "validation error message" }
```

### 401 Unauthorized
```json
{ "error": "Invalid credentials" }
```

### 404 Not Found
```json
{ "error": "Resource not found" }
```

### 500 Internal Server Error
```json
{ "error": "Internal server error" }
```
