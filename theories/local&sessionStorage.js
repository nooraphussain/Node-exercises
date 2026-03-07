// Local Storage

// What it is:
// Key–value storage in the browser that persists even after you close the tab or browser.

// Characteristics:

// Size: ~5–10 MB (much bigger than cookies).
// Data never expires automatically (stays until you clear it manually or via code).
// Only accessible from the same origin (domain, protocol, port).
// Not sent to the server with every HTTP request (unlike cookies).

// Example use cases:

// Saving user preferences (theme = dark/light).
// Storing JWT tokens for authentication.
// Caching data for offline apps.


// Save
localStorage.setItem("username", "Noora");

// Get
console.log(localStorage.getItem("username")); // "Noora"

// Remove
localStorage.removeItem("username");

// Clear all
localStorage.clear();


// Session Storage

// What it is:
// Key–value storage in the browser that persists only while the tab/session is open.

// Characteristics:

// Same size limit (~5 MB).
// Data is deleted automatically when the tab or window is closed.
// Isolated per browser tab (two tabs of the same site won’t share session storage).

// Example use cases:

// Storing temporary form input.
// Keeping user state only during that session (like a shopping cart until checkout).
// Data that should not persist after the tab is closed.

// Save
sessionStorage.setItem("tempKey", "12345");

// Get
console.log(sessionStorage.getItem("tempKey")); // "12345"

// Remove
sessionStorage.removeItem("tempKey");

// Clear all
sessionStorage.clear();



// Local Storage = “Long-term memory” of your browser.

// Session Storage = “Short-term memory” that vanishes when you close the tab.