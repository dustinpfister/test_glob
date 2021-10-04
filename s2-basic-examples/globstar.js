const glob = require('glob');

let forFiles = (err,files) => console.log(files);
glob('../**/*.md', forFiles);
