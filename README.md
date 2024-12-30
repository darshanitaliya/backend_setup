# Backend setup Project

## Overview

This is the backend service for **Basic Setup of Backend**, a foundational project aimed at learning and implementing essential backend development concepts. It is built using **Node.js** with **Express.js** and incorporates key libraries for security, file handling, cloud integration, and database operations. The project serves as a practical guide to setting up a robust backend infrastructure.

---

## Features

- **Authentication:** User authentication and authorization using JWT and bcrypt.
- **File Uploads:** Handles file uploads and integrates with **Cloudinary** for media storage.
- **Database Management:** Uses **MongoDB** with **Mongoose** for data modeling and aggregation with pagination.
- **Middleware:** Includes CORS for cross-origin resource sharing and cookie-parser for cookie management.
- **Environment Configuration:** Manages sensitive data securely using dotenv.
- **Developer Tools:** Prettier for code formatting and Nodemon for live server reloading.

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **File Storage:** Cloudinary
- **Authentication:** JSON Web Tokens (JWT) and bcrypt
- **Environment Variables:** dotenv

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/darshanitaliya/backend_setup
   cd backend_setup

2. Install dependencies:
    ```bash
    npm install

3. Set up environment variables:
    Create a .env file in the root directory and add variables.

4. Start the development server:
    ```bash 
    npm run dev


## Features

- **Basic Authentication:**  
  Secure login and registration using JSON Web Tokens (JWT) to ensure user identity and data protection.

- **File Upload Support:**  
  Supports file uploads, either locally or directly to **Cloudinary**, enabling efficient media management.

- **MongoDB Integration:**  
  Provides CRUD (Create, Read, Update, Delete) operations using **Mongoose**, a powerful ODM library for MongoDB.

- **Middleware Integration:**  
  Seamlessly handles essential backend operations with middleware like:
  - **cookie-parser**: For parsing cookies.
  - **CORS**: To manage cross-origin resource sharing.
  - **dotenv**: For managing environment variables.

- **Scalable Structure:**  
  Designed with scalability in mind, making it easy to expand with additional routes, controllers, and services as the project grows.

