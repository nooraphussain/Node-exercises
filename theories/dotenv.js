// What is dotenv?

// dotenv is a Node.js package that loads environment variables from a .env file into process.env.
// Environment variables are key–value pairs used to configure applications without hardcoding sensitive info.

// 👉 Example of environment variables:

// Database connection string
// API keys
// JWT secret
// Port number

// ⚡ Why Use dotenv?

// Keeps sensitive data secure (don’t put secrets in code).
// Easy to switch between environments (development, testing, production).
// Avoids “works on my machine” issues by centralizing config.

// dotenv = loads environment variables from .env into process.env.

// Keeps your app secure, flexible, and environment-independent.


require('dotenv').config();

console.log(process.env.PORT);        // 4000
console.log(process.env.DB_URI);      // mongodb://localhost:27017/myapp
console.log(process.env.JWT_SECRET);  // mySuperSecretKey


//how you can set environment variables without dotenv:
// in terminal:
// export PORT=4000
// export DB_URI="mongodb://localhost:27017/myapp"
// node app.js
