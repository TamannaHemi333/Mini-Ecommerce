# Mini E-Commerce API

## 📌 Project Overview
This project is a backend RESTful API that simulates a basic e-commerce platform.  
It supports user authentication, role-based authorization, product management, cart operations, and order processing with proper business logic and data consistency.

The system is designed to demonstrate clean backend architecture, secure authentication, and transactional order handling.

---

## 🛠️ Tech Stack Used

### Backend
- **Node.js**
- **Express.js**

### Database
- **MongoDB**
- **Mongoose ODM**

### Authentication & Security
- **JWT (JSON Web Tokens)**
- **bcryptjs** for password hashing

### Other Tools
- **dotenv** (environment configuration)
- **MongoDB Transactions** (for order & stock consistency)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Project

git clone <repository-url>
cd mini-ecommerce-api
Install Dependencies
npm install
npm run dev
http://localhost:5000


Database Schema
User

_id

name

email (unique)

password (hashed)

role (admin | customer)

cancelCount

Product

_id

name

price

stock

description

Cart

_id

userId (User reference)

items

productId

quantity

Order

_id

userId (User reference)

items

productId

quantity

price

totalAmount

status (Pending | Shipped | Delivered)

createdAt

Relationship Overview

One User → One Cart

One User → Many Orders

One Order → Many Products (via order items)

 API Endpoints Summary
Authentication

POST /api/auth/register

POST /api/auth/login

Product (Admin Only)

POST /api/products

PUT /api/products/:id

DELETE /api/products/:id

Cart (Customer)

POST /api/cart/add

POST /api/cart/remove

Order

POST /api/orders




Conclusion

This project demonstrates a scalable and secure backend architecture with proper business logic, role-based authorization, and transactional data handling suitable for a real-world e-commerce system.
