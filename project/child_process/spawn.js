//spawn → for long-running processes (streaming data).
const { spawn  } = require('child_process');

const child = spawn('ls' , ['-lh']);

child.stdout.on('data', (data) => {
    console.log(`Standard output: ${data}`);
})

child.stderr.on('data', (data) => {
    console.log(`Standard error: ${data}`);
})

child.on('error', (err) => {
    console.log(`Error: ${err.message}`);
})



























