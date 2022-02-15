const {MyMath} = require('./MyMath');
const {Component} = require('./Component');


/* 
How require() works:
Resolving -> Loading -> Wrapping -> Evaluation -> Caching

1. Core module
2. File
    2.1 *.js
    2.2 *.json
3. Directory
    3.1 package.json -> "main"
    3.2 index.js | index.json
4. node_modules
5. throw new Error()

*/

const c = new Component();
c.render();

const res = MyMath.sum(3,3);
console.log('index.js');