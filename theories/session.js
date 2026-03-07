// What is a Session?

// A session is a way to store data about a user across multiple requests.
// Unlike cookies (which store data on the client), session data is stored on the server,
// and only a session ID is stored in the user’s cookie.

// Example:

// You log in → server creates a session → server gives you a session ID.
// On each request, your session ID is sent in a cookie → server looks up your session → you stay logged in.

// 📦 express-session

// A popular middleware for managing sessions in Express.
// Stores session data on the server (by default in memory, but can be stored in databases like Redis, MongoDB, etc.).
// Automatically sets and manages the connect.sid cookie that holds the session ID.

const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
  secret: 'mySecretKey',        // used to sign the session ID cookie
  resave: false,                // don’t save session if unmodified
  saveUninitialized: true,      // save new sessions
  cookie: { maxAge: 60000 }     // cookie expiry (1 min)
}));

app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`You visited this page ${req.session.views} times`);
  } else {
    req.session.views = 1;
    res.send('Welcome! Refresh to start counting views.');
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));


// Inserting a Value into Session

// Once session middleware is set up, you can store values in req.session:
app.get('/set-session', (req, res) => {
    req.session.username = "Noora";   // inserting value
    req.session.isAdmin = true;       // another value
    res.send("Session values set!");
  });

//Accessing Session Values
app.get('/get-session', (req, res) => {
    res.send(`Username: ${req.session.username}, Is Admin: ${req.session.isAdmin}`);
  });

  
//Destroying Session
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
      if (err) {
        return res.send("Error destroying session");
      }
      res.send("Session destroyed!");
    });
  });

  
//   To insert: req.session.key = value;

//   To read: req.session.key
  
//   To delete all: req.session.destroy()