const fs = require('fs');

fs.appendFile('project/fileSystem/original.txt', '\nAdding next line',(err) => {
    if(err)console.log('Error while appending file:', err);
    console.log("Appended file succesfully!")
})