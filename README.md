
# 📚 Booknest – Second-Hand Book Exchange Platform

**Booknest** is a full-stack MERN (MongoDB, Express.js, React, Node.js) web application designed to promote sustainable reading by enabling users to **buy, sell, or exchange** second-hand books. It serves as a digital hub for book lovers to connect and give pre-loved books a new home.

---

## 🌟 Project Overview

With rising book prices and environmental concerns, many readers prefer second-hand books. **Booknest** addresses this need by offering a clean, user-friendly platform where individuals can:

- List books they want to sell or donate
- Browse available books from others
- Connect with buyers/sellers
- Explore books by category, language, or condition

---

## ✨ Key Features

### 🛒 Buyer & Seller Features
- View all books with image, description, genre, author, and language
- Add a book listing with details like condition and contact info
- Buy or request a listed book

### 🔍 Search & Filter
- Search books by title, genre, author, or language
- Filter books by condition (new, good, readable)

### 📦 Backend API
- RESTful API built with Express.js and MongoDB
- Supports CRUD operations for book listings
- MongoDB Atlas used for scalable cloud storage

### 🧾 Frontend Interface
- Built with React & Tailwind CSS
- Fast-loading, mobile-responsive UI
- Simple and accessible UX for all users

---

## 🛠️ Tech Stack

| Tech         | Usage                    |
|--------------|--------------------------|
| React        | Frontend UI              |
| Tailwind CSS | Styling & layout         |
| Axios        | API requests             |
| Node.js      | Runtime environment      |
| Express.js   | Server-side framework    |
| MongoDB      | NoSQL database           |
| Mongoose     | MongoDB ORM              |
| Dotenv       | Environment variables    |
| Nodemon      | Live backend reload      |

---

## 📁 Project Directory Structure

\`\`\`
booknest/
├── backend/
│   ├── config/               # DB configs
│   ├── controllers/          # Request logic
│   │   └── itemController.js
│   ├── models/               # MongoDB schemas
│   │   └── Item.js
│   ├── routes/               # API routes
│   │   └── itemRoutes.js
│   ├── .env                  # Environment variables
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── ItemList.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css         # Tailwind CSS applied here
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── README.md
\`\`\`

---

## 🔧 Installation & Setup Guide

### ✅ Prerequisites

- Node.js & npm
- MongoDB Atlas account
- Code editor (VS Code preferred)

---

### 1️⃣ Clone the Repository

\`\`\`bash
git clone https://github.com/your-username/booknest.git
cd booknest
\`\`\`

---

### 2️⃣ Backend Setup

\`\`\`bash
cd backend
npm install
\`\`\`

Create a `.env` file in the backend directory:

\`\`\`env
PORT=5050
MONGO_URI=your_mongodb_connection_string
\`\`\`

Start the backend:

\`\`\`bash
npm run dev
\`\`\`

---

### 3️⃣ Frontend Setup

\`\`\`bash
cd ../frontend
npm install
\`\`\`

Add Tailwind CSS (if not already installed):

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

Update \`tailwind.config.js\`:

\`\`\`js
content: ["./src/**/*.{js,jsx,ts,tsx}"]
\`\`\`

Update \`src/index.css\`:

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

Start the frontend:

\`\`\`bash
npm start
\`\`\`

---

## 🌐 Environment Variables

In the \`backend/.env\` file, provide your MongoDB credentials:

\`\`\`env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
PORT=5050
\`\`\`

---

## 📌 API Endpoints

| Route              | Method | Description               |
|--------------------|--------|---------------------------|
| \`/api/items\`       | GET    | Fetch all book listings   |
| \`/api/items\`       | POST   | Create a new listing      |
| \`/api/items/:id\`   | DELETE | Delete a specific listing |

---

## 📦 Future Improvements

- 🔐 User login/authentication (JWT)
- 🖼️ Book image upload (Cloudinary)
- 💬 Chat between users
- ⭐ Book rating & reviews
- 🎁 Book donation flow
- 🧾 Invoice download for buyers

---

## 🤝 Contributing

We welcome contributions! Follow these steps:

1. Fork the repository
2. Create your feature branch: \`git checkout -b feature/YourFeature\`
3. Commit your changes: \`git commit -m "Add your feature"\`
4. Push to the branch: \`git push origin feature/YourFeature\`
5. Open a Pull Request

---

## 🧪 Testing (Optional)

Manual testing using:
- Postman (for backend API)
- Browser DevTools
- Mobile view testing (Chrome DevTools)

---

## 🪪 License

This project is licensed under the MIT License. See \`LICENSE\` for more details.

---

## 👨‍💻 Author

Built by **Roshaan Shahid Sapid**

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

