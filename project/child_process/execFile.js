//execFile → like exec, but runs a file directly (safer).
const { execFile } = require("child_process");

execFile('project/child_process/somefile.sh', (err, stdout, stderr) => {
    if(err){
        console.log(`Error: ${err}`)
        return;
    }
    if(stderr){
        console.log(`Standard error: ${stderr}`)
        return;
    }
    console.log(`Standard output: ${stdout}`)
})



























