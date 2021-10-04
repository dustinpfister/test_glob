const globMod = require('glob'),
promisify = require('util').promisify,
path = require('path'),
glob = promisify(globMod);
// glob now returns a promise
const dir_root = path.join(__dirname, '..'),
patt = path.join(dir_root, '*.md');
glob(patt)
.then((files)=>{
    console.log(files);
})
.catch((e)=>{
    console.log(e.message);
})
