const { appendFile, appendFileSync } = require("fs");

const data = "Hadi here ";
appendFile("hadi.txt", "Hadi here ", (err) => {
    console.log("done ");
});
