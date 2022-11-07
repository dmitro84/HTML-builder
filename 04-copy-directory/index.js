const path = require('path');
const { readdir, mkdir, copyFile } = require('fs/promises');

async function copyDir(dir) {
    const fileCopy = path.join(__dirname, './files-copy');

    try {
        await mkdir(fileCopy, { recursive: true });
        const files = await readdir(dir);
        for (const file of files) {
            await copyFile(path.join(__dirname, './files', file), path.join(fileCopy, file));
        };
        console.log('Files copied');
    } catch (err) {
        console.error(err);
    }
}

copyDir(path.join(__dirname, './files'));