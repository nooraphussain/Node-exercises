// What is Express.js?

// A fast, unopinionated, minimalist web framework for Node.js.
// Makes it easy to build web servers and APIs.
// Built on top of Node’s native http module (simplifies it a lot).
// Without Express, you’d have to write raw http.createServer code (more verbose).

// ⚡ Why Use Express?

// Routing → handle different HTTP methods (GET, POST, etc.).
// Middleware → process requests/responses (e.g., logging, authentication).
// Templating → integrate view engines like EJS, Pug.
// Scalable → great for REST APIs, full web apps, or microservices.
// Huge ecosystem of middleware packages.

//Basic server:
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



//1. Routing
app.get('/users', (req, res) => {
    res.send('Get all users');
  });
  
  app.post('/users', (req, res) => {
    res.send('Create a new user');
  });
  
  app.put('/users/:id', (req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
  });
  
  app.delete('/users/:id', (req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
  });

//2. Middleware
//Middleware = functions that run before reaching the final route handler.
//Examples: logging, authentication, parsing request body

// Custom middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // pass control to next handler
  });

  
//3. Request & Response Objects
//req (request): info from client (headers, query, body, params).
//res (response): methods to send data back (res.send, res.json, res.status).
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    res.json({ message: `Welcome ${username}` });
  });

  
//4. Static Files
app.use(express.static('public'));
//Now public/style.css is served at http://localhost:3000/style.css.


//5. Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });



// Express.js = framework that simplifies Node.js web development.

// Routing + Middleware = core concepts.

// Used for REST APIs, web apps, and scalable backends.