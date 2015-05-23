/**
 * Created by HENG on 2015/5/22.
 */
var async = require("async");
var doItem = require("./do.js");

function mapDoImages(list, limit) {
    limit = limit || 3;
    async.mapLimit(list, limit, function (url, callback) {
        console.log("compress file: ", url);
        doItem(url, callback);
    }, function (err, result) {
        console.log('final: ');
        console.log(result);
    });
}


module.exports = mapDoImages;