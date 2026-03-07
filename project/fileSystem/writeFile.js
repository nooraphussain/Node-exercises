const fs  = require('fs');

//Asynchronous
fs.writeFile('project/fileSystem/original.txt', 'Writing contentsto file.', (err, data) => {
    if(err){
        console.log('Error while writing file:', err);
    }else{
        console.log('File written successfully!')
    }
})


//Synchronous
try{
    let data = fs.writeFileSync('project/fileSystem/original.txt', 'Let\'s write something', 'utf8');
    console.log('Synchronous writing successful');
}catch(err){
    console.error(err);
}

//using promises;
await fs.promises.writeFile('project/fileSystem/original.txt', 'Hello async-await ');


//syn => async => promises (priority order)