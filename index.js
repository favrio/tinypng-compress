/**
 * Created by HENG on 2015/5/22.
 */
console.log("======");
var fs = require("fs");
var mapDoImages = require("./limit.js");

var path = "./test";


var walk = function(dir, done) {
    var results = [];
    fs.readdir(dir, function(err, list) {
        if (err) return done(err);
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) return done(null, results);
            file = dir + '/' + file;
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

walk(path, function (err, data) {
    console.log(data);
    mapDoImages(data);
});