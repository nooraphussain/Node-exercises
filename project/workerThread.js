const {Worker} = require('worker_threads');

const worker = new Worker('./project/worker.js');


worker.on('message', (msg) =>{console.log('Message from worker:', msg)});
worker.on('err', (err) =>{console.error('Error from worker:', err)});
worker.on('exit', (code) =>{console.log('Worker excited with code:', code)});