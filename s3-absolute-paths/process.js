const glob = require('glob'),
path = require('path');
// resolve first positional argument or ./*.js
const patt = path.resolve(process.argv[2] || './*.js');
console.log( 'globing: ' + patt );
glob(patt, (err, files) => {
    if (err) {
        console.log(err);
    } else {
        console.log(files);
    }
});

