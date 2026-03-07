// HTTP (HyperText Transfer Protocol)

// Standard protocol for communication between client (browser) and server.
// Data is sent in plain text → not secure.


// HTTPS (HTTP Secure)

// Same as HTTP, but uses SSL/TLS encryption.
// Encrypts the data exchanged between client and server.
// Protects against eavesdropping and man-in-the-middle attacks.
// Used for banking, login pages, and basically all modern websites.


// http://example.com → insecure

// https://example.com → secure (🔒 padlock in browser)


// HTTP Methods

// HTTP methods define what action the client wants to perform on the server resource.

// GET → Retrieve data (read-only).
// POST → Send data to create a new resource.
// PUT → Update/replace an existing resource.
// PATCH → Partially update an existing resource.
// DELETE → Remove a resource.
// HEAD → Like GET, but returns only headers (no body).
// OPTIONS → Returns allowed HTTP methods for a resource (CORS use).



// 🧩 Parts of HTTP
// 1. HTTP Request (from client → server)

// Contains:

// Request line:

// GET /users HTTP/1.1
// (Method + Path + HTTP Version)


// Headers: (metadata about request)

// Host: example.com
// Content-Type: application/json
// Authorization: Bearer <token>


// Body: (optional, used in POST/PUT/PATCH)
// { "name": "Noora" }


// 2. HTTP Response (from server → client)

// Contains:

// Status line:
// HTTP/1.1 200 OK
// (HTTP Version + Status Code + Message)


// Headers: (metadata about response)

// Content-Type: application/json
// Cache-Control: no-cache


// Body: (data/content returned)

// { "id": 1, "name": "Noora" }



// Common Status Codes

// 200 OK → Success.
// 201 Created → Resource created (POST success).
// 400 Bad Request → Invalid client request.
// 401 Unauthorized → Not logged in / invalid token.
// 403 Forbidden → Logged in but not allowed.
// 404 Not Found → Resource doesn’t exist.
// 500 Internal Server Error → Server crash/error.



// HTTP/HTTPS → Protocols for client-server communication.
// Methods → Define action (GET, POST, PUT, DELETE, etc.).
// Request → Sent by client (method + headers + body).
// Response → Sent by server (status + headers + body).