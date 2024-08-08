const { unlinkSync, readdirSync, writeFileSync } = require("fs");

const allFiles = readdirSync(__dirname) // * dirname = current directory name 
// console.log(allFiles);

// [
//     'append.js',
//     'coreModule.js',
//     'deleteAllFiles.js',     
//     'deStruc.js',
//     'excercise.txt',
//     'expoClass.js',
//     'exportObj.js',
//     'expoVar.js',
//     'extension.txt',
//     'firefox extensions.txt',
//     'first.js',
//     'toRead.html'
//   ]

allFiles.forEach((elem) => {
    if (elem !== "deleteAllFiles.js") {
        unlinkSync(elem);
    }
})

let msg = "I have deleted all your files :) ";
writeFileSync("msg.js", msg);