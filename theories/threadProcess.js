// What is a Thread?

// A thread is the smallest unit of execution within a process.

// A process can contain one or more threads that share the same memory space but run independently.

// Think of it like:
// Process = the application (e.g., Chrome browser).
// Thread = a worker inside it (e.g., one thread renders a tab, another handles extensions).

// ⚡ Threads in General

// Threads allow parallel execution of tasks.

// Example:

// One thread handles user input.
// Another thread downloads data in the background.
// Another thread updates the UI.
// This makes apps faster and more responsive.



// Threads in Node.js

// Node.js is single-threaded (only one main thread runs JavaScript code).
// But under the hood, Node.js uses libuv (C++ library) which manages a thread pool for certain tasks like:
// File system operations.
// Network operations.
// Compression, crypto, DNS lookups.

// 👉 So while your JS runs in a single thread (event loop), heavy tasks are delegated to background threads.

// Process = program in execution.
// Thread = a lightweight unit of execution inside a process.

    // Node.js:

    // Main JS execution = single thread (event loop).
    // Background work (I/O, async ops) = thread pool via libuv.
    // For CPU-heavy tasks → use worker threads.



// A process is a program in execution.
// When you run a program (e.g., node app.js), your operating system creates a process.

// A process has:

// Its own memory space (separate from other processes).
// Program code + data.
// At least one thread (the main thread).
// System resources (file handles, network connections, etc.).


// Processes in Node.js

// When you run node server.js, you create a Node.js process.
// That process runs a single main thread for JavaScript execution (event loop).

// Node also provides:

// Child Processes → run another program or script in parallel.
// Worker Threads → run JS code in parallel inside the same process
// app.js
console.log('Process ID:', process.pid);
console.log('Node Version:', process.version);
console.log('Platform:', process.platform);


// Example: Spawning a Child Process
const { exec } = require('child_process');

exec('node -v', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Node version:', stdout);
});


// Process = program running with its own memory + resources.

// Thread = smaller execution unit inside a process.

// Node.js normally = 1 process, 1 main thread, but you can create more.
