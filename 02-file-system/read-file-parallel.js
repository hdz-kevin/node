
import { readFile } from "node:fs/promises";

/**
 * Execute multiple asynchronous operations in parallel
 *
 * Promise.all() takes an array of promises and returns a single
 * promise that resolves when all of the promises in the array
 * have resolved.
 */
Promise.all([
    readFile("./file-system/file.txt", "utf-8"),
    readFile("./file-system/file2.txt", "utf-8"),
])
    .then(([text, text2]) => {
        console.log(text);
        console.log();
        console.log(text2);
    });

