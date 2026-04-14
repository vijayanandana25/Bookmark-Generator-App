# 🔖 Bookmark Generator App

A simple full-stack Bookmark Generator application built using **React + Node.js**, containerized with Docker, and deployed on Kubernetes using AWS ECR and EKS.

---

## 🚀 Features

* Add bookmarks with title and URL
* View all saved bookmarks
* Clickable links open in a new tab
* REST API backend
* Fully containerized using Docker
* Deployed using Kubernetes

---

## 🧩 Tech Stack

* **Frontend:** React
* **Backend:** Node.js (Express)
* **Containerization:** Docker
* **Container Registry:** Amazon Web Services ECR
* **Orchestration:** Kubernetes
* **Cloud Platform:** Amazon EKS

---

## 📁 Project Structure

```
bookmark-app/
├── frontend/        # React app
├── backend/         # Node.js API
├── k8s/             # Kubernetes manifests
```

---

## ⚙️ Getting Started (Local)

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd bookmark-app
```

### 2. Run Backend

```bash
cd backend
npm install
node server.js
```

### 3. Run Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🐳 Docker Setup

### Build Images

```bash
docker build -t bookmark-backend ./backend
docker build -t bookmark-frontend ./frontend
```

---

## ☁️ Push to AWS ECR

### Create repositories

```bash
aws ecr create-repository --repository-name bookmark-backend
aws ecr create-repository --repository-name bookmark-frontend
```

### Authenticate Docker

```bash
aws ecr get-login-password --region <region> \
| docker login --username AWS \
--password-stdin <account-id>.dkr.ecr.<region>.amazonaws.com
```

### Tag & Push

```bash
docker tag bookmark-backend:latest <ECR-URI>/bookmark-backend
docker tag bookmark-frontend:latest <ECR-URI>/bookmark-frontend

docker push <ECR-URI>/bookmark-backend
docker push <ECR-URI>/bookmark-frontend
```

---

## ☸️ Kubernetes Deployment

### Update image names in `k8s/` files:

```yaml
image: <ECR-URI>/bookmark-backend
image: <ECR-URI>/bookmark-frontend
```

### Apply manifests:

```bash
kubectl apply -f k8s/
```

---

## 🌐 Access Application

```bash
kubectl get svc
```

Look for:

```
EXTERNAL-IP
```

Open in browser:

```
http://<EXTERNAL-IP>
```

---

## ⚡ Future Improvements

* Add database (MongoDB / PostgreSQL)
* Add authentication (JWT)
* Add real-time updates (WebSockets)
* Add CI/CD pipeline (GitHub Actions)
* Add custom domain & HTTPS

---

## 🎯 Learning Outcomes

* Built a full-stack application
* Containerized applications using Docker
* Used AWS ECR for image storage
* Deployed containers on Kubernetes (EKS)
* Exposed services using LoadBalancer

---

## 📌 Notes

* This project uses in-memory storage (data resets on restart)
* For production use, integrate a database

---

## 🙌 Author

Your Name
GitHub: https://github.com/your-username
