const fs = require("fs");
const buf = new Buffer(214 );

console.log("Open file ");

fs.open("./myData.json", "r+", (err, fd) => {
    // ! console.log("fd = ", fd);

    if (err) {
        console.error("Something went wrong ");
        console.error(err);
    } else {
        console.log("File opened ");

        console.log("Read file ");
        let startPosition = 0,
            numOfCharToRead = buf.length,
            startingPosInFile = 0;

        fs.read(
            fd,
            buf,
            startPosition,
            numOfCharToRead,
            startingPosInFile,
            (errRead, NumCharFetched) => {
                if (errRead) {
                    console.error("Something went wrong while reading ");
                    console.error(errRead);
                } else {
                    console.log("num of char fetched = ", NumCharFetched);
                    console.log(buf);                    
                    console.log(buf.slice(0, NumCharFetched).toString());
                }
            }
        );
        fs.close(fd, (err) => {
            if (err) {
                console.log("Something went wrong while closing ");
                console.error(err);
            } else {
                console.log("File closed ");                
            }

        })
    }
});
