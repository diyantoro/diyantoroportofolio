# Portfolio Website - Deployment Guide

## Prerequisites
- Node.js 18+ and npm
- Golang 1.22+
- MySQL 8.0+
- Docker & Docker Compose (optional)
- AWS EC2 instance (for production)
- Domain name (optional)

## Local Development Setup

### 1. Clone Repository
```bash
git clone <repository-url>
cd portofolio
```

### 2. Database Setup
```bash
# Create MySQL database
mysql -u root -p
CREATE DATABASE portfolio_db;
EXIT;

# Import schema (optional - GORM auto-migrates)
mysql -u root -p portfolio_db < database/init.sql
```

### 3. Backend Setup
```bash
cd backend

# Copy environment file
cp ../.env.example .env
# Edit .env with your database credentials

# Run backend
go mod tidy
go run main.go
```

### 4. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

### 5. Access Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:8080/api
- Admin Dashboard: http://localhost:5173/admin/login
- Default Admin: `admin@email.com` / `admin123`

## Docker Deployment

### Build and Run with Docker Compose
```bash
# From project root
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Access
- Frontend: http://localhost
- Backend API: http://localhost:8080/api
- Admin Dashboard: http://localhost/admin/login

## AWS EC2 Deployment

### 1. Launch EC2 Instance
- AMI: Ubuntu 22.04 LTS
- Instance Type: t2.medium (minimum)
- Security Group:
  - HTTP (80) - 0.0.0.0/0
  - HTTPS (443) - 0.0.0.0/0
  - SSH (22) - Your IP
  - Custom TCP (8080) - Your IP (optional)

### 2. Connect to EC2
```bash
ssh -i your-key.pem ubuntu@your-ec2-public-ip
```

### 3. Install Dependencies
```bash
sudo apt update && sudo apt upgrade -y

# Install Docker
sudo apt install docker.io docker-compose -y
sudo systemctl enable docker
sudo systemctl start docker
sudo usermod -aG docker $USER

# Logout and login again for group changes
exit
```

### 4. Clone and Deploy
```bash
ssh -i your-key.pem ubuntu@your-ec2-public-ip

# Clone repository
git clone <repository-url>
cd portofolio

# Configure environment
cp .env.example .env
# Update JWT_SECRET and database credentials

# Deploy with Docker Compose
docker-compose up -d --build
```

### 5. Configure Nginx (Alternative without Docker)
```bash
sudo apt install nginx -y

# Copy nginx config
sudo cp nginx/nginx.conf /etc/nginx/sites-available/portfolio
sudo ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Test and restart
sudo nginx -t
sudo systemctl restart nginx
```

### 6. Setup SSL with Let's Encrypt
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com
```

### 7. Setup AWS S3 for File Uploads (Optional)

Create S3 bucket and update backend config:
```go
// In backend/config/config.go or .env
AWS_REGION=us-east-1
AWS_BUCKET=your-bucket-name
AWS_ACCESS_KEY=your-access-key
AWS_SECRET_KEY=your-secret-key
```

## Project Structure
```
portofolio/
├── frontend/              # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── context/      # React context
│   │   ├── utils/        # Utilities
│   │   └── assets/       # Static assets
│   ├── Dockerfile
│   └── package.json
├── backend/               # Golang + Gin Framework
│   ├── config/           # Configuration
│   ├── database/         # Database connection
│   ├── models/           # GORM models
│   ├── repository/       # Data access
│   ├── service/          # Business logic
│   ├── controller/       # HTTP handlers
│   ├── middleware/        # Auth middleware
│   ├── routes/           # Route definitions
│   ├── utils/            # Utilities (JWT, password)
│   ├── uploads/          # Uploaded files
│   ├── main.go
│   └── Dockerfile
├── database/              # SQL files
│   └── init.sql
├── nginx/                 # Nginx configuration
│   └── nginx.conf
├── docs/                  # Documentation
│   └── api.md
├── docker-compose.yml
└── .env.example
```

## Environment Variables

### Backend (.env)
| Variable | Description | Default |
|----------|-------------|---------|
| DB_HOST | Database host | localhost |
| DB_PORT | Database port | 3306 |
| DB_USER | Database user | root |
| DB_PASSWORD | Database password | |
| DB_NAME | Database name | portfolio_db |
| JWT_SECRET | JWT signing secret | your-secret-key... |
| APP_PORT | Backend port | 8080 |

### Frontend (.env)
| Variable | Description | Default |
|----------|-------------|---------|
| VITE_API_URL | Backend API URL | http://localhost:8080/api |

## Default Admin Account
- Email: `admin@email.com`
- Password: `admin123`

## Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, React Router, Axios, Framer Motion, React Icons
- **Backend**: Golang, Gin Framework, GORM, JWT
- **Database**: MySQL 8.0
- **DevOps**: Docker, Docker Compose, Nginx, AWS EC2

## Troubleshooting

### Backend fails to connect to database
```bash
# Ensure MySQL is running
sudo systemctl status mysql

# Check database credentials in .env
cat backend/.env
```

### Frontend cannot reach API
```bash
# Check if backend is running
curl http://localhost:8080/api/projects

# Verify VITE_API_URL in frontend/.env
```

### Docker container exits immediately
```bash
# Check logs
docker-compose logs backend
docker-compose logs db
```
