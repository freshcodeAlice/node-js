const {MyMath} = require('./MyMath.js');
const {Component} = require('./Component');

console.log(2+2);
console.log('hello node!');

const c = new Component();
c.render();

const res = MyMath.sum(3,3);
console.log(res);