CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

CREATE TABLE IF NOT EXISTS users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),
    updated_at DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS projects (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    technologies TEXT,
    github_url VARCHAR(500),
    demo_url VARCHAR(500),
    image VARCHAR(500),
    created_at DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),
    updated_at DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS certificates (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    issuer VARCHAR(255),
    category VARCHAR(100) NOT NULL,
    image VARCHAR(500),
    created_at DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),
    updated_at DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS blog_posts (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    content LONGTEXT NOT NULL,
    excerpt TEXT,
    tags VARCHAR(500),
    image VARCHAR(500),
    created_at DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),
    updated_at DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS messages (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),
    updated_at DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO users (name, email, password) VALUES
('Admin', 'admin@email.com', '$2a$14$LqX7Y1V8pYq1V8pYq1V8pOYq1V8pYq1V8pYq1V8pYq1V8pYq1V')
ON DUPLICATE KEY UPDATE name = name;

INSERT INTO projects (title, description, category, technologies, github_url, image) VALUES
('Sistem Rental Mobil', 'Aplikasi fullstack untuk manajemen rental mobil dengan fitur booking, pembayaran, dan laporan.', 'Web Development', 'PHP,Laravel,MySQL,Bootstrap', 'https://github.com/diyantoro/Manejemen-Rentalmobil.git', NULL),
('HIMAPETRI', 'Website resmi Himpunan Mahasiswa Peternakan Universitas Sriwijaya yang dibangun dengan HTML5, CSS3, dan Bootstrap 5.', 'Web Development', 'HTML5,CSS3,Bootstrap,JavaScript', 'https://github.com/diyantoro/himapetri.git', NULL)
ON DUPLICATE KEY UPDATE title = title;

INSERT INTO certificates (title, issuer, category) VALUES
('Trend Kejahatan Siber: Mengenal Dark Web untuk Pemula', 'Webinar Nasional', 'Cyber Security')
ON DUPLICATE KEY UPDATE title = title;

INSERT INTO blog_posts (title, slug, content, tags, excerpt) VALUES
('Getting Started with React', 'getting-started-with-react', 'React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small, isolated pieces of code called components.\n\nReact has a few different kinds of components, but we will focus on React Hooks in this article.', 'React,JavaScript,Frontend', 'Learn the basics of React and how to build modern web applications.'),
('Introduction to Machine Learning', 'introduction-to-machine-learning', 'Machine Learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.\n\nThis article covers the fundamentals of ML, including supervised and unsupervised learning.', 'Machine Learning,AI,Python', 'An introduction to Machine Learning concepts and applications.')
ON DUPLICATE KEY UPDATE title = title;
