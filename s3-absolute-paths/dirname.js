const glob = require('glob'),
path = require('path');
// list markdown files at root of project folder
const dir_root = path.join(__dirname, '..'),
patt = path.join(dir_root, '*.md');
glob(patt, (err, files) => {
    if (err) {
        console.log(err);
    } else {
        console.log(files);
    }
});

