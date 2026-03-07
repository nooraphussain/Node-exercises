// What is CORS?

// CORS = Cross-Origin Resource Sharing.
// It’s a browser security feature that controls how resources (like APIs, images, fonts) are shared between different origins.

// Origin = combination of:
// Protocol (http/https)
// Domain (example.com)
// Port (3000, 8080, etc.)

// 👉 Example:

// Frontend: http://localhost:3000
// Backend API: http://localhost:5000
// These are different origins, so browser checks CORS.

// 🔒 Why CORS Exists?

// To prevent malicious websites from making unauthorized requests to another site on behalf of the user.
// Example: Without CORS, a fake site could secretly make requests to your bank’s API while you’re logged in.

// ⚡ How CORS Works

// When your frontend (origin A) requests data from backend (origin B):
// Browser sends a CORS preflight request (an OPTIONS request).

// Server responds with CORS headers like:
// Access-Control-Allow-Origin
// Access-Control-Allow-Methods
// Access-Control-Allow-Headers

// If headers match → request allowed. If not → browser blocks it.

// 📌 Important CORS Headers

// Access-Control-Allow-Origin → specifies which origins can access.
// * (anyone)

// http://localhost:3000 (specific)

// Access-Control-Allow-Methods → allowed HTTP methods (GET, POST, PUT).

// Access-Control-Allow-Headers → allowed custom headers (like Content-Type, Authorization).

// Access-Control-Allow-Credentials → if cookies/authorization headers allowed.

const express = require('express');
const cors = require('cors');
const app = express();

// Allow all origins
app.use(cors());

// Allow only specific origin
// app.use(cors({ origin: "http://localhost:3000" }));

app.get('/data', (req, res) => {
  res.json({ message: "CORS working!" });
});

app.listen(5000);


// CORS = Cross-Origin Resource Sharing.

// It’s a browser rule to protect users.

// Controlled by server via headers.

// In Express, use cors middleware for easy setup.



// What is a Preflight Request?

// When a browser sees a cross-origin request that is not simple (e.g., custom headers, 
//     methods like PUT, DELETE, or sending JSON with Content-Type: application/json),
// It first sends a preflight request with OPTIONS method to the server.

// This checks:

// Is this origin allowed?
// Are these methods allowed?
// Are these headers allowed?


// Example of Preflight Request

// Browser sends:

// OPTIONS /api/data HTTP/1.1
// Origin: http://localhost:3000
// Access-Control-Request-Method: POST
// Access-Control-Request-Headers: Content-Type


// Server responds:

// HTTP/1.1 204 No Content
// Access-Control-Allow-Origin: http://localhost:3000
// Access-Control-Allow-Methods: GET, POST, PUT
// Access-Control-Allow-Headers: Content-Type


// Preflight method = always OPTIONS.

// It’s an automatic check by the browser, not by your code.

// The actual request (e.g., POST, PUT) happens only if preflight passes.