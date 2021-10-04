const glob = require('glob'),
// some options
options = {
    cwd: '../'
},
// for Files
forFiles = (err,files) => console.log(files);

// glob it.
glob('**/*.md', options, forFiles);

console.log(process.cwd());