const { rename, readSync } = require("fs");

rename("./data.json", "myData.json", () => console.log("done"));

