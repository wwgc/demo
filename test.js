'use strict';

const maxsum3 = require('./maxsum3');
const maxsum4 = require('./maxsum4');

let a=[1,2,-1,5,-4,2,3,-5,6,4,10,-9];

console.time('maxsum3');

console.log(maxsum3(a, 0, a.length - 1));

console.timeEnd('maxsum3');

console.time('maxsum4');

console.log(maxsum4(a));

console.timeEnd('maxsum4');
