# Diyantoro Portfolio

React 18 + Vite 5 + TypeScript + Tailwind CSS + Framer Motion frontend, with a Go/Gin REST API and MySQL database.

## Local development

### Prerequisites

- Node.js 20+
- Go 1.22+
- MySQL 8 (Laragon or Docker)

### 1. Create the database

```sql
CREATE DATABASE IF NOT EXISTS portfolio_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
```

### 2. Start the backend

```powershell
cd backend
go run .
```

The API listens on `http://localhost:8080`. GORM creates the tables automatically and seeds an admin user (`admin@email.com` / `admin123`).

Defaults can be overridden with environment variables:

| Variable | Default |
| --- | --- |
| `DB_HOST` | `localhost` |
| `DB_PORT` | `3306` |
| `DB_USER` | `root` |
| `DB_PASSWORD` | *(empty)* |
| `DB_NAME` | `portfolio_db` |
| `JWT_SECRET` | development secret |
| `APP_PORT` | `8080` |

### 3. Start the frontend

```powershell
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

If you prefer IPv4 explicitly:

```powershell
npm run dev -- --host 127.0.0.1
```

Vite proxies `/api` and `/uploads` to `http://localhost:8080`. Set `VITE_API_TARGET` to change the proxy target.

> The contact form submits to `POST /api/messages` and stores messages in the `messages` table. It does **not** send an actual email; SMTP delivery is not configured.

## Production build

```powershell
cd frontend
npm run build
```

This runs `tsc --noEmit` then `vite build`. The output is in `frontend/dist`.

## Vercel deployment

In the Vercel project settings, set **Root Directory** to `frontend` (the old `portofolio/frontend` path no longer exists). Use the Vite preset:

- Build Command: `npm run build`
- Output Directory: `dist`

`frontend/vercel.json` adds the SPA fallback so direct URLs such as `/projects` do not return 404.

Set the environment variable `VITE_API_URL` to a publicly reachable API base, for example `https://api.example.com/api`. If it is empty, the app falls back to same-origin `/api`, which only works when a reverse proxy is configured. The Go API must be deployed separately; the contact form cannot work without it.

## Docker

The root `Dockerfile` builds the frontend image (React build + nginx) from the repository root:

```powershell
docker build -t portfolio-frontend .
docker compose up --build
```

`docker-compose.yml` starts three services: MySQL (`3307`), the Go API (`8080`), and the frontend (`80`). Docker Desktop must be running.

## Useful checks

```powershell
cd frontend
npm run typecheck
npm run build
```
