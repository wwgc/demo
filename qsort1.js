'use strict';

function qsort1(arr, l, u){
	if(l>=u) return;
	let m = l, tmp;
	for(let i=l+1; i<=u; i++){
		if(arr[i]<arr[l]){
			++m;
			tmp = arr[m];
			arr[m] = arr[i];
			arr[i] = tmp;
		}
	}
	
	tmp = arr[l];
	arr[l] = arr[m];
	arr[m] = tmp;	
	qsort1(arr, l, m-1);
	qsort1(arr, m+1, u);
}

module.exports = qsort1;
