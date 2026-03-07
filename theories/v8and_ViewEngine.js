// ⚡ V8 Engine

// What it is:
// V8 is Google’s open-source JavaScript engine, written in C++.
// It’s the engine inside Chrome, Edge, and also Node.js.

// Role:
// V8 takes your JavaScript code and compiles it directly into machine code (instead of interpreting line by line).
// This is why Node.js (and Chrome) run JS very fast.


// Features:

// Implements ECMAScript standards (the official JavaScript specification).
// Handles memory management and garbage collection.
// Powers Node.js by providing the runtime environment where your JS executes.

// In Node.js:
// Without V8, Node.js wouldn’t be able to run JavaScript outside a browser.



// View Engine
// What it is:
// A View Engine is used in web applications to generate HTML pages dynamically.
// In Node.js/Express, a view engine allows you to write templates (with placeholders)
// that get filled with data before being sent to the browser.

// Examples:

// EJS (Embedded JavaScript)
// Pug (formerly Jade)
// Handlebars
// Mustache

const express = require('express');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Example route
app.get('/', (req, res) => {
  res.render('index', { name: 'Noora' });
});

app.listen(3000, () => console.log('Server running...'));
