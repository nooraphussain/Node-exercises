import fs from 'fs';

//Asynchronous - non-blocking, uses callbacks
fs.readFile('project/fileSystem/example.txt', 'utf8', (err, data) => {

    if(err){
        console.log('Error reading the file:', err);
    }else{
        console.log('Contents in the file:\n', data);
    }
})


//Synchronous - blocks the thread until operation completes
try{
    const data = fs.readFileSync('project/fileSystem/example.txt', 'utf8');
    console.log('Data in the file:\n', data);
}catch(err){
    console.error(err);
}


//With promises
const fsPromises = fs.promises;

async function readFile(){
try{
    const data = await fsPromises.readFile('project/fileSystem/example.txt', 'utf8');
    console.log('Data in the file using promise:\n', data);
}catch(err){
    console.error(err);
    }
}

readFile()