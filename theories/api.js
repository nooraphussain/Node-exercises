// What is an API?

// API = Application Programming Interface
// It’s a set of rules that allows two applications to communicate with each other.
// In web development, API = endpoints on a server that a client (browser, mobile app, another server) can call.

// 👉 Think of an API as a menu in a restaurant:

// You (client) see the menu (API documentation).
// You place an order (request).
// The kitchen (server) prepares food (data).
// Waiter (API) brings it back (response).


// Types of APIs

// 1. Web APIs (HTTP-based) → most common
// -REST API
// -GraphQL
// - SOAP

// 2. Library APIs → methods exposed by libraries/frameworks.
// 3. OS APIs → e.g., file system, process managemen


// API in Web (REST Example)

// Endpoint (URL): https://api.example.com/users
// HTTP Method: GET → fetch users
// Request → Sent by client (browser, app)
// Response → Sent by server (JSON, XML, etc.)


//Example (Express.js API)
const express = require('express');
const app = express();

app.use(express.json());

// GET API
app.get('/users', (req, res) => {
  res.json([{ id: 1, name: "Alice" }]);
});

// POST API
app.post('/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: "User created", user: newUser });
});

app.listen(3000, () => console.log("API running on port 3000"));



// 📌 HTTP Methods in API

// GET → Fetch data
// POST → Create data
// PUT/PATCH → Update data
// DELETE → Remove data


// API = bridge for communication between apps.
// In web → typically HTTP APIs (REST/GraphQL).
// Built using endpoints + HTTP methods.
// Returns data (JSON is most common).



// REST API

// REST = Representational State Transfer
// Uses endpoints (URLs) for different resources.
// Each resource has its own fixed route.

// Example

// GET /users → get all users
// GET /users/1 → get user with ID=1
// POST /users → create new user
// PUT /users/1 → update user with ID=1

// 👉 Data format: usually JSON

// 🔎 GraphQL API

// Query language for APIs, developed by Facebook.
// Single endpoint (e.g., /graphql)
// Client decides what data it wants in the query.

// Example

// Request:

// {
//   user(id: 1) {
//     name
//     email
//   }
// }


// Response:

// {
//   "data": {
//     "user": {
//       "name": "Alice",
//       "email": "alice@example.com"
//     }
//   }
// }

// When to Use
// REST → simple apps, smaller APIs, when caching with HTTP is useful.
// GraphQL → complex apps (like social networks), mobile apps with limited bandwidth,
//  where flexible queries are needed.

//  REST: Multiple endpoints, server decides what to send.

// GraphQL: One endpoint, client decides what it needs.