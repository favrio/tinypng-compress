/**
 * Created by HENG on 2015/5/22.
 */
var fs = require("fs");
var path = require("path");
var mapDoImages = require("./limit.js");
var concurrent = 3;

var walk = function(dir, done) {
    var results = [];
    fs.readdir(dir, function(err, list) {
        if (err) return done(err);
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) return done(null, results);
            file = path.resolve(dir, file);
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function(err, res) {
                        results = results.concat(res);
                        next();
                    });
                } else {
                    results.push(file);
                    next();
                }
            });
        })();
    });
};


var hasPath = process.argv.indexOf("--path");
var compressPath = (hasPath !== -1 && process.argv[hasPath + 1]) ? process.argv[hasPath + 1] : null;

if(compressPath) {
    walk(testPath, function (err, data) {
        console.log("find these images: ", data);
        mapDoImages(data, concurrent);
    });
} else {
    console.log("no enter dir");
}
