// ⚙️ What is libuv?

// libuv is a C library that Node.js uses under the hood.

// It provides:

// Event loop (the heart of async operations).
// Thread pool (for expensive tasks like file I/O, DNS, crypto).
// Cross-platform support (Windows, Linux, macOS → same behavior).
// 👉 Without libuv, Node.js couldn’t do non-blocking I/O efficiently.


// 🔄 Why libuv?

// JavaScript in Node.js runs on V8 engine (fast, but single-threaded).
// To handle many tasks at once, Node.js needs an async system → libuv.
// It abstracts OS-level differences and gives Node.js a uniform async model.

// 🧩 libuv Responsibilities

// 1.Event Loop
// -Keeps track of tasks, executes callbacks when events finish.
// -Example: setTimeout, setInterval, promises, async I/O.

// 2. Thread Pool (Default: 4 threads)
// -Used for heavy or blocking tasks like:
// -File system operations (fs.readFile)
// -DNS lookups
// -Crypto operations

// These don’t block the main event loop.

// 3. Async I/O
// -Wraps system calls so network/file operations don’t block.

// 4. Cross-platform Abstraction
// -Same Node.js code works on Windows, Linux, macOS → thanks to libuv handling OS differences.

const fs = require('fs');

console.log("Start");

fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("File content:", data);
});

console.log("End");

// What happens here (libuv in action):

// fs.readFile → sent to libuv thread pool.
// While file is being read, event loop keeps running.
// Once file read is done → libuv pushes callback to event loop.
// Callback runs → console.log("File content:", data).


// V8 → Runs JavaScript.

// libuv → Provides async power (event loop + thread pool).

// Node.js = V8 + libuv + core modules.

// Default thread pool size = 4 (can be changed with UV_THREADPOOL_SIZE).

// libuv is the backbone of Node.js async behavior.
// It manages event loop, thread pool, and I/O so Node.js can handle thousands of requests without blocking.