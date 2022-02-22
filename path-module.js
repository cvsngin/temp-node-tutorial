const path = require('path')
console.log(path.sep);

const subPathJoin = path.join('/content','/subcontent','text.txt')
console.log(subPathJoin); 

const base = path.basename(subPathJoin)
console.log(base);

const absolute = path.resolve(__dirname,'/content','/subcontent','text.txt')
console.log(absolute);