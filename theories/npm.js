// 📦 What is npm?

// Full form: Node Package Manager

// What it is:

// A package manager for JavaScript/Node.js.
// Comes bundled when you install Node.js.
// Lets you install, manage, and share reusable code modules (called packages).

// ⚡ Why npm?

// Instead of writing everything from scratch, you can use open-source libraries.
// Example: Need a server framework? → express.
// Need authentication? → jsonwebtoken.
// Need a database client? → mongoose.
// npm makes this as simple as one command.

// 🔑 Key Features

// Install packages (globally or per project).
// Manage dependencies in a project (package.json).
// Run project scripts (npm start, npm test, etc.).
// Publish your own packages for others to use.

//npx
// NPX (Node Package Execute) is a command-line tool that comes bundled with npm
//  (Node Package Manager) since version 5.2.0.
// It allows you to run executable packages without installing them globally.
//This is useful for tools you only need occasionally, or when you want to use a specific version of a package.
//Instead of installing a package globally with npm install -g <package>,
// you can use npx <package> <command>. NPX will download the package, execute the command,
// and then remove the package (unless cached).

// npm = package manager.

// npx = package runner (lets you run CLI tools without installing them globally).



//NVM
//NVM (Node Version Manager) is a tool that allows you to install and manage multiple Node.js 
//versions on a single machine. This is crucial because different projects might require different
// Node.js versions for compatibility.
//Instead of relying on a system-wide Node installation, NVM lets you switch between versions easily.
// It achieves this by modifying your environment variables, particularly the PATH,
// pointing to the desired Node.js installation directory.