'use strict';

const maxsum1 = require('./maxsum1');
//const maxsum21 = require('./maxsum21');
//const maxsum22 = require('./maxsum22');
//const maxsum3 = require('./maxsum3');
//const maxsum4 = require('./maxsum4');

let a=[1,2,-1,5,-4,2,3,-5,6,4,10,-9];

console.time('maxsum1');

console.log(maxsum1(a));

console.timeEnd('maxsum1');

//console.time('maxsum21');

//console.log(maxsum21(a));

//console.timeEnd('maxsum21');

//console.time('maxsum22');

//console.log(maxsum22(a));

//console.timeEnd('maxsum22');

//console.time('maxsum3');

//console.log(maxsum3(a, 0, a.length - 1));

//console.timeEnd('maxsum3');

//console.time('maxsum4');

//console.log(maxsum4(a));

//console.timeEnd('maxsum4');
