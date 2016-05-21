'use strict';

const qsort1 = require('./qsort1');

let arr=[1,2,-1,5,-4,2,3,-5,6,4,10,-9];

console.time('qsort1');
qsort1(arr, 0, arr.length-1);
console.log(arr);
console.timeEnd('qsort1');
