const { writeFile, writeFileSync } = require("fs");

writeFile("addTwoNums.js", "console.log(\"Hello world! \") \n", "utf-8", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("done ");        
    }
})