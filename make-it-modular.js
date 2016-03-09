var ex6 = require('./module.js');

ex6(process.argv[2], process.argv[3], function(err, data) {
    for(var i in data) {
    console.log(data[i]);
    }
    }
);
