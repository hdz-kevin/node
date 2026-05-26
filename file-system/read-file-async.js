
const fs = require("node:fs");

/**
 * Read file asynchronously (non-blocking thread)
 * 
 * Callback is a function that is called when a async operation is completed,
 * either with an error or with the result of the task.
 */

console.log("Reading the first file...");
fs.readFile("./file-system/file.txt", "utf-8", (err, text) => { // execute this until the file has been read
    console.log("====== First file ======");
    console.log(text);
});

// This is executed as the same time as the file is being read, because the thread is not blocked
console.log("--> Do something while reading file...");

console.log("Reading the second file...");
fs.readFile("./file-system/file2.txt", "utf-8", (err, text) => {
    console.log("====== Second file ======");
    console.log(text);
});

