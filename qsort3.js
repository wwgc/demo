'use strict';

function qsort3(arr, l, u) {
    if (l >= u) return;
    let t = arr[l], i=l, j=u+1,tmp;

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

    qsort3(arr, l, j-1);
    qsort3(arr, j+1, u);
}

module.exports = qsort3;
