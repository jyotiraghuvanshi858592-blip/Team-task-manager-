# ⚡ TaskFlow — Team Task Manager

**By Jyoti Raghuvanshi** | GitHub: [@jojoraghuvanshi9927-wq](https://github.com/jojoraghuvanshi9927-wq)

---

## 📁 Folder Structure

```
taskflow/
├── frontend/
│   ├── src/
│   │   ├── App.jsx        ← All pages & components
│   │   └── main.jsx       ← React entry
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── backend/
│   ├── routes/
│   │   ├── auth.js        ← Signup, Login
│   │   └── tasks.js       ← CRUD tasks
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── middleware/
│   │   └── auth.js        ← JWT protect
│   ├── server.js          ← Express app
│   ├── .env.example
│   └── package.json
│
├── railway.toml           ← Railway config
└── .gitignore
```

---

## 🚀 Features

- ✅ Signup & Login (JWT auth)
- 📋 Add, view, update, delete tasks
- 👥 Assign tasks to team members
- 📅 Deadline with overdue detection
- 🔄 Status: Pending → In Progress → Completed
- 📊 Dashboard with stats & progress bar
- 🔍 Search & filter tasks

---

## 🛠 Tech Stack

| Layer    | Tech                        |
|----------|-----------------------------|
| Frontend | React 18, Vite              |
| Backend  | Node.js, Express.js         |
| Database | MongoDB Atlas + Mongoose    |
| Auth     | JWT + bcryptjs              |
| Deploy   | Railway                     |

---

## ⚙️ Local Setup

### Backend
```bash
cd backend
npm install
cp .env.example .env
# .env mein MONGO_URI aur JWT_SECRET daalo
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Railway Deploy Steps

### Step 1 — MongoDB Atlas
1. [mongodb.com/atlas](https://mongodb.com/atlas) pe free account banao
2. New Cluster → Free tier
3. Database Access → User banao (username + password)
4. Network Access → `0.0.0.0/0` allow karo
5. Connect → Connection string copy karo

### Step 2 — GitHub pe Push karo
```bash
git init
git add .
git commit -m "Initial commit - TaskFlow by Jyoti Raghuvanshi"
git branch -M main
git remote add origin https://github.com/jojoraghuvanshi9927-wq/team-task-manager.git
git push -u origin main
```

### Step 3 — Railway Deploy
1. [railway.app](https://railway.app) pe jao
2. **"New Project"** → **"Deploy from GitHub repo"**
3. Apna repo select karo
4. **Variables** tab mein ye add karo:
   ```
   MONGO_URI = mongodb+srv://...
   JWT_SECRET = taskflow_jyoti_secret_2026
   PORT = 5000
   ```
5. **Deploy** → Live link milegi! ✅

---

## 🔑 Demo Login

```
Email:    jyoti@demo.com
Password: jyoti123
```

---

## 📡 API Endpoints

| Method | Endpoint          | Description       | Auth |
|--------|-------------------|-------------------|------|
| POST   | /api/auth/signup  | Register          | ❌   |
| POST   | /api/auth/login   | Login + token     | ❌   |
| GET    | /api/tasks        | Get all tasks     | ✅   |
| POST   | /api/tasks        | Create task       | ✅   |
| PATCH  | /api/tasks/:id    | Update status     | ✅   |
| DELETE | /api/tasks/:id    | Delete task       | ✅   |

---

Made with ⚡ by **Jyoti Raghuvanshi**
