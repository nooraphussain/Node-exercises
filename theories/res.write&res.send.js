// 1. res.write()

// Comes from Node.js core http module.
// Sends a chunk of response body to the client.
// You can call it multiple times before ending the response.
// You must call res.end() to finish the response.

const http = require('http');

http.createServer((req, res) => {
  res.write("Hello ");   // first chunk
  res.write("World!");   // second chunk
  res.end();             // must end
}).listen(3000);


// 2. res.send()

// Comes from Express.js.
// A convenience method that:
// Sets headers (like Content-Type) automatically.
// Sends the response body (string, buffer, JSON, object).
// Ends the response automatically (no need for res.end()).

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello World!");  // single step
});

app.listen(3000);


// Use res.write() in raw Node.js when sending data chunks manually (like streaming).

// Use res.send() in Express.js for simplicity — it handles headers + ending the response for you.