module.exports = function(dirName, extension, callback) {
    var fs = require('fs');
    var path = require('path');

    var results = [];

    fs.readdir(dirName, function(err, data) {
    if (err) {
        return callback(err);
        }
    else {
        for(var i in data) {
        var fileExtension = path.extname(data[i]);

        if (fileExtension == '.' + extension)
            results.push(data[i]);
        }
        callback(null, results);
    }
    });
}
