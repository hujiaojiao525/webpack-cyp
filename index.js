#! node


var fs = require('fs');
var path = require('path');

var config = {};

function copyTemplate (from, to) {
    from = path.join(__dirname, 'templates', from);
    write(to, fs.readFileSync(from, 'utf-8'))
}
function write (path, str, mode) {
    fs.writeFileSync(path, str)
}
function mkdir (path, fn) {
    fs.mkdir(path, function (err) {
        fn && fn()
    })
}

console.log("build complete.");
console.log(" use \"npm run sass\" to watch the sass file changes.");