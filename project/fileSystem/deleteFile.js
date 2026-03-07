const fs = require('fs');
//Asynchronous
fs.unlink('project/fileSystem/temp.txt', (err) => {
    if(err) console.log('Error while deleting file', err);
    console.log('Deleted successfully-async')
})

//Synchronous
// try{
//     fs.unlinkSync('project/fileSystem/temp.txt')
//     console.log('File deleted successfully!-sync');
// }catch(err){
//     console.error(err)
// }

// //promises
// const fs = require('fs').promises;

// async function deleteFile() {
//     try {
//         await fs.unlink('project/fileSystem/temp.txt');
//         console.log('File deleted successfully! - async/await');
//     } catch (err) {
//         console.error(err);
//     }
// }

// deleteFile();