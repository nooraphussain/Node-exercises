// What is Middleware?

// In Express.js, middleware is a function that has access to:
// req (request object)
// res (response object)
// next (a function to pass control to the next middleware)

// 👉 Middleware sits in between the incoming request and the final response.
// 🧩 Middleware Function Structure:
function middlewareExample(req, res, next) {
    console.log('Middleware executed!');
    next(); // move to next middleware/route handler
  }

  
//Types of Middleware in Express.js

// 1.Application-level middleware
//   Applied to the whole app using app.use().
  
  const express = require('express');
  const app = express();
  
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
  
  
// 2.Route-level middleware
//   Applied to specific routes.
  
  app.get('/profile', authMiddleware, (req, res) => {
    res.send('User Profile');
  });
  
  
// 3.Built-in middleware (comes with Express):
  
//   express.json() → parse JSON body
//   express.urlencoded() → parse form data
//   express.static() → serve static files
  
  app.use(express.json());
  
  
// 4.Error-handling middleware
//   Has 4 arguments: (err, req, res, next)
  
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  
  
// 5.Third-party middleware
  
//   morgan (logging)
//   cors (cross-origin support)
//   helmet (security headers)
//   express-session (sessions)
  
  const morgan = require('morgan');
  app.use(morgan('dev'));
  

//   Middleware = functions that modify req/res or control flow.

//   Order matters (executed in sequence).
  
//   Can be global (app.use), route-specific, or error-handling.
  
//   Must call next() to continue unless sending a response.