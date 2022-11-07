const { readdir, stat } = require('fs/promises');
const path = require('path');

async function screenFolder() {
    try {
        const files = await readdir(path.join(__dirname, './secret-folder'), { withFileTypes: true });
        for (const file of files) {
            if (file.isFile()) {
                try {
                    const stats = await stat(path.join(__dirname, './secret-folder', file.name));
                    console.log(path.basename(file.name, path.extname(file.name)), '-', path.extname(file.name).slice(1), '-', stats.size / 1000 + 'kb');
                }
                catch (error) {
                    console.log(error);
                }
            }
        };
    } catch (err) {
        console.error(err);
    }
}

screenFolder();