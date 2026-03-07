import fs from 'fs';

//Asynchronous - non-blocking, uses callbacks
fs.readFile('project/fileSystem/example.txt', 'utf8', (err, data) => {

    if(err){
        console.log('Error reading the file:', err);
    }else{
        console.log('Contents in the file:', data);
    }
})



//Synchronous - blocks the thread until operation completes;