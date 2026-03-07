//eexec → runs a command, buffers entire output.
const {exec}  = require('child_process');

//ls -lh : lists all the files in the current directory
exec('ls -lh' , (err, stdout, stderr) => {
    if(err){
        console.log(`Error: ${err}`);
        return;
    } 
    if(stderr){
        console.log(`Standard error: ${stderr}`);
        return;
    } 
    console.log(`Standard output: ${stdout}`)
})



















