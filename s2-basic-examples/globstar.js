var glob = require('glob');

var forFiles = function(err,files){ console.log(files);};
glob('**/*.md', forFiles);
