const { unlink, unlinkSync } = require("fs");

unlink("./hadi.txt", () => console.log("done"));
