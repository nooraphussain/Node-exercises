//fork → special case of spawn for running another Node.js script.
// parent.js
const { fork } = require('child_process');

const child = fork('project/child_process/fork.js');

child.on('message', (msg) => {
  console.log('Message from child:', msg);
});

child.send({ task: "processData" });
