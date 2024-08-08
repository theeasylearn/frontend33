const { renameSync, readdirSync } = require("fs");
const allFiles = readdirSync(__dirname);

// console.log(allFiles);
// [
//     'append.js',
//     'coreModule.js',
//     'deStruc.js',
//     'expoClass.js',
//     'exportObj.js',
//     'expoVar.js',
//     'first.js',
//     'rename.js'
// ]

function getRandomName() {
    return parseInt(Math.random() * 10000); // 0.1234 * 10000 = 1234
}
// console.log(getRandomName());
// 0.0534 * 10000 = 0534

allFiles.forEach((elem) => {
    let exeName = elem.split(".")[1];
    if (elem !== "rename.js") {
        renameSync(elem, getRandomName() + "." + exeName);
    }
});

// ! --------------
// 3381 + 97 { 'a' } =>
// Math.random() * 10 + 97 -> char
// name += char
