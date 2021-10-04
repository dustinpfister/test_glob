const glob = require('glob'),
fs = require('fs');

const readFiles = function (pat, forFile) {
    // pattern
    pat = pat || '*.js';
    // for file method
    forFile = forFile || function (content, file) {
        console.log('');
        console.log(file);
        console.log('*****');
        console.log(content);
        console.log('*****')
    };
    // using glob
    glob(pat, function (err, files) {
        if (err) {
            console.log(err);
        } else {
            files.forEach(function (file) {
                fs.readFile(file, function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        forFile(data.toString(), file);
                    }
                });
            });
        }
    });
};

readFiles();
