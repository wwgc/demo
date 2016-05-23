'use strict';

const insertSort = require('./insertSort');

function qsort4(arr, l, u) {
    if (l >= u) return;
    if(u-l<50) return insertSort(arr, l, u);

    let t = arr[l], i=l, j=u+1,tmp, randomIndex = randomInt(l, u);

    tmp = arr[l];
    arr[l] = arr[randomIndex];
    arr[randomIndex] = tmp;

    while(true){
        do{i++}while(i<=u && arr[i]<t);
        do{j--}while(arr[j]>t);
        if (i > j) break;
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    
    tmp = arr[l];
    arr[l] = arr[j];
    arr[j] = tmp;

    qsort4(arr, l, j-1);
    qsort4(arr, j+1, u);
}

function randomInt(min, max){
    // math.random:[0,1); result:(min,max]
    return min + Math.round((max-min)*(1-Math.random()));
}

module.exports = qsort4;
