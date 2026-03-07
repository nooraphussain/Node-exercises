const fs = require('fs');

fs.link('project/fileSystem/original.txt', 'project/fileSystem/hardlink.txt', (err) =>{
    if(err){
        console.log('Error while creating hard link:', err);
        return;
    }
    console.log('Hard link created successfully.')
})


try {
    fs.linkSync('original.txt', 'hardlink.txt');
    console.log('Hard link created successfully!');
  } catch (err) {
    console.error('Error:', err);
  }