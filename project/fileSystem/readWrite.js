const fs = require('fs');

fs.readFile('project/fileSystem/original.txt', 'utf8', (err, data) =>{
    if(err){
        console.error('Error reading file:', err);
        return;
    }
    console.log('Contents in the file: \n', data);    
})


fs.writeFile('project/fileSystem/example.txt', 'Hello world', 'utf8', (err)=>{
    if(err){
        console.error('Error while writing file', err);
        return;
    }
    console.log('File written successfully')
})


fs.unlink('project/fileSystem/example.txt', (err) => {
    if(err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully!');
});


const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);

fs.writeFileSync('output.txt', content, 'utf8');
console.log('File written successfully!');

fs.unlinkSync('output.txt');
console.log('File deleted successfully!');
