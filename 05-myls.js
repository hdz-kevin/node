import fs from "node:fs/promises";
import path from "node:path";

const directory = process.argv[2] ?? '.';

ls(directory)

async function ls(directory) {
    try {
        const files = await fs.readdir(directory);

        const filesPromises = files.map(async (file) => {
            const filePath = path.join(directory, file);
            const stats = await fs.stat(filePath);
            const isDirectory = stats.isDirectory();
            const type = isDirectory ? 'd' : '-';
            const size = stats.size;
            const modified = stats.mtime.toLocaleString();
            
            return `${type}\t${size}\t${modified}\t${file}`;

        });

        const filesInfo = await Promise.all(filesPromises);
        filesInfo.forEach(info => console.log(info));
        
    } catch {
        console.log(`Error: no such file or directory "${directory}"`);
        process.exit(1);
    }
}
