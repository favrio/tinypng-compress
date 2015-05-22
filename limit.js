/**
 * Created by HENG on 2015/5/22.
 */
var async = require("async");
var doItem = require("./do.js");
var limit = 3;
var count = 0;

var testList = [
    "./test/Chrysanthemum.jpg",
    "./test/Desert.jpg",
    "./test/Hydrangeas.jpg",
    "./test/Jellyfish.jpg",
    "./test/Koala.jpg",
    "./test/Lighthouse.jpg",
    "./test/Penguins.jpg",
    "./test/test.png",
    "./test/Tulips.jpg",
]

async.mapLimit(testList, 3, function (url, callback) {
    console.log(url);
    doItem(url, callback);
}, function (err, result) {
    console.log('final:');
    console.log(result);
});